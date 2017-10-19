---
layout: page
title: "Q151198: XADM: How to Set Up a Search for a Custom Attribute"
permalink: /kb/151/Q151198/
---

## Q151198: XADM: How to Set Up a Search for a Custom Attribute

	Article: Q151198
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In many cases, Microsoft Exchange administrator's would like users to be able to
	search the Global Address List (GAL) based on fields that are not available by
	default. This article explains how to include additional attributes in searches
	and Address Name Resolutions (ANR).
	
	MORE INFORMATION
	================
	
	To adding a custom attribute to a search, an administrator will need to perform
	the following:
	
	- Change the name of the custom attribute.
	
	- Add the custom attribute to be included in searches.
	
	- Modify the Search template of the Address Book.
	
	For example, if you want to modify Custom Attribute 1 to represent each user's
	Birthday, follow these steps:
	
	1. Open the Microsoft Exchange Administrator program in Raw mode by specifying
	  Admin /r on the command line.
	
	2. Bring up the properties of the DS Site Configuration object in the
	  Configuration container.
	
	3. Select the Custom Attributes property page.
	
	4. Type "Birthday" (without the quotation marks) as the value for Custom
	  Attribute 1 and click on OK.
	
	5. From the View menu, select Raw Directory. This should add a container in the
	  left pane called Schema.
	
	6. Double click the Schema object and hit F5 to refresh the display.
	
	7. Get the properties of the Birthday object by double clicking on the object or
	  by selecting the Properties command from the File menu.
	
	8. This should bring up a message box. Click the Yes button to view the raw
	  properties of the object.
	
	9. From the Object attributes listbox, select the Search-Flags attribute.
	
	10. In the Edit value box, enter the value 2 and then click the Set button.
	
	11. Click on OK to close the Property Sheet.
	
	12. Go to the Configuration, Addressing, Details Templates, English/USA
	  container. Select the Search Dialog object and get its properties.
	
	13. Select the Templates page.
	
	14. Click the New button, select Label, and click OK.
	
	15. Enter the following details:
	
	      X = 10       Y = 130
	      Width = 25   Height = 12
	      Text = Birthday
	
	  and click on OK.
	
	16. Click the New button, select Edit, and click OK.
	
	17. Enter the following details:
	
	      X = 65       Y = 130
	      Width = 50   Height = 12
	      Field = Birthday
	
	  and click on OK.
	
	18. Click the Test button. This should bring up a dialog that will allow you to
	  test the changes you just made. This is how the dialog will appear from the
	  Microsoft Exchange client.
	
	After the above steps have been completed, a user can search the GAL based on the
	Birthday field. The search dialog will contain a field for the Birthday. In
	order for the search to be successful, the Birthday field on the Custom
	Attributes page of each mailbox's properties will need to be filled in by the
	administrator.
	
	In order for the Birthday field to appear in the details of each user when viewed
	from a Microsoft Exchange client, steps 13-18 should be repeated on the
	Configuration, Details Templates, English/USA, Mailbox object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
