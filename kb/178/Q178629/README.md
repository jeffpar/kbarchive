---
layout: page
title: "Q178629: XCLN: How To Set the Maximize Property of an Exchange Form"
permalink: /kb/178/Q178629/
---

## Q178629: XCLN: How To Set the Maximize Property of an Exchange Form

	Article: Q178629
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Exchange Forms Designer does not provide a way to launch the main window of
	a form in a maximized state. Maximizing the form in the design environment and
	installing the form does not allow you to set the Window State property to
	maximized.
	
	MORE INFORMATION
	================
	
	To set the window state property of the main form window, perform the following
	steps:
	
	1. After you install the form, open the form's project (.vbp) files in Visual
	  Basic. These files are located in the <Form Name>.vb directory.
	
	2. Open the Main window form named Window1.frm.
	
	3. From the View menu, select Properties.
	
	4. In the Properties dialog box, set the value of the Window State property to
	  Maximized.
	
	5. Select Save Project from the File menu.
	
	6. From the File menu, select Make EXE file to re-compile the executable. When
	  prompted, choose Yes to replace the existing file.
	
	At this point the .exe file has been updated with the new property. The next step
	is to reinstall the updated .exe into the form library or public folder into
	which it was originally installed. You can do this by using the Forms Manager in
	the Microsoft Exchange client and clicking the Install button. Then, point to
	the .cfg file for the form that you just customized. The Forms Manager will then
	prompt you to overwrite the existing form, if you have correctly selected the
	same location that the form was installed.
	
	The next time a client launches the form, a new copy will be copied to the
	computer and will start in a maximized state.
	
	Additional query words: extend code maximize full screen default vb
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
