package ee.mihkel.backend2.controller;
import ee.mihkel.backend2.model.Item;
import ee.mihkel.backend2.service.ItemService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ItemController {

    @Autowired
    ItemService itemService;


    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("/items")
    public void postItems(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @SneakyThrows
    @GetMapping("view-item/{id}")
        public Item getOneItem(@PathVariable Long id) throws Exception{
        return itemService.getOneItem(id);
        }
}