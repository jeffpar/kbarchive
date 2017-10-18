---
layout: page
title: "Q258959: XADM: How to Save Properties to a File Using Mdbvu32.exe"
permalink: kb/258/Q258959/
---

## Q258959: XADM: How to Save Properties to a File Using Mdbvu32.exe

	Article: Q258959
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain circumstances you may want to save message or folder properties to a
	file for examination or comparison. This article explains how to do this by
	using the Mdbvu32.exe program.
	
	MORE INFORMATION
	================
	
	To save message or folder properties to a file by using the Mdbvu32.exe
	program:
	
	1. Create a profile for the mailbox that the folder or message is located in.
	
	2. Double-click Mdbvu32.exe to start the Mdbvu32.exe program.
	
	3. Click to select the MAPI_EXPLICIT_PROFILE and MAPI_NEW_SESSION check boxes,
	  and then click OK.
	
	4. Choose the appropriate profile when you are prompted to do so. An MDB Viewer
	  Test Application dialog box is displayed.
	
	5. On the MDB menu, click OpenMessageStore.
	
	6. Click to select the line for the mailbox that you want to gain access to
	  (make sure that the open mode is set to Best Access), and then click Open.
	
	7. On the MDB menu, click Open Root Folder. A new dialog box that contains three
	  columns is displayed.
	
	8. In the left column, double-click "Top of Information Store".
	
	9. The folders in the mailbox are displayed. Locate the folder or message that
	  you want to dump the properties for (double-click to open each folder). After
	  you locate the message or folder that you want, double-click it. Either the
	  name of the folder or the subject of the message (as applicable) is displayed
	  in the title bar of the dialog box.
	
	10. In either the Message Properties or Folder Properties list (as applicable),
	  click Call Function. If a warning or error message is displayed, click OK
	  and ignore the warning or error message.
	
	11. Click GetProps. The lpObj->GetProps() dialog box is displayed.
	
	12. Click Add All Current. (If you only want to dump certain properties, you can
	  also select a specific property from the list, or you can type the
	  hexadecimal value of a specific property in the PropID box and click Add.)
	
	13. Click Call.
	
	14. The lpObj->GetProps() dialog box is displayed.
	
	15. Click Dump PropVal.
	
	16. The "Store Props in File" dialog box is displayed. Either enter the name of
	  a file that you want to store the properties in or accept the default.
	
	17. Click to select the Store Actual Binary Data check box. If this check box is
	  not selected, the output file only contains the headers of the properties
	  and not the actual data that is stored in the properties.
	
	18. Click OK.
	
	19. Click Close to close all of the open dialog boxes until the MDB Viewer Test
	  Application dialog box is displayed.
	
	20. On the MDB menu, click Store Logoff.
	
	21. Click OK (do not click to select any check boxes).
	
	22. If any messages are displayed, click OK.
	
	23. Click Session, and then click Exit.
	
	The output file that you specified should contain the property names and values
	in a comma-separated value (CSV) file. You can use Microsoft Excel to open this
	file and easily associate a property with the value of that property.
	
	If the same output file is specified again, the information is appended to the
	output file.
	
	
	Mdbvu32.exe is located on the Exchange Server CD-ROM in the Support\Utils folder.
	
	Additional query words: delegate mapi access
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
