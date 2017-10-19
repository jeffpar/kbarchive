---
layout: page
title: "Q140331: FAX: Send Fax Macro No Longer Works with 32-bit Office products"
permalink: /kb/140/Q140331/
---

## Q140331: FAX: Send Fax Macro No Longer Works with 32-bit Office products

	Article: Q140331
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a; Win95:; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	- Microsoft Office for Windows 95 
	- Microsoft Office 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Send Fax macro that is located under the File menu of Microsoft Word for
	Windows version 7.0 and Microsoft Excel for Windows version 7.0 are no longer
	operable when you use version 3.0, 3.2, 3.2a, or 3.5 of Microsoft Mail for
	Windows.
	
	If you choose the Send Fax option when you run the Windows mail client, the error
	messages below will be displayed:
	
	Microsoft Word for Windows:
	
	  Microsoft Word Err=1046
	  Windows cannot print due to a problem with the current printer setup.
	
	  -OR-
	
	  MAPI of Microsoft Mail for Windows is not installed. You cannot send fax but
	  you can print fax images to file.
	
	Microsoft Excel for Windows:
	
	  Macro error
	  [MSFAX.XLA] Msfax! B32
	
	WORKAROUND
	==========
	
	Use the Microsoft Exchange Mail client instead of the Windows Mail client for
	the Send Fax macro to work as expected with Microsoft Gateway to FAX.
	
	For proper execution of the macro, it is important that the Microsoft Fax driver
	be set to the GENI: (Unknown local port) in the Microsoft Windows 95 printer
	properties section.
	
	-OR-
	
	Configure the Microsoft Fax driver so that it prints to FILE. Select the print
	option in any Windows application and give the file a compatible DCX file name,
	such as <myfile>.DCX. Next, attach the *.DCX file to a Microsoft Mail
	message in either the Windows or Microsoft Exchange Mail client.
	
	NOTE: For attachments to be properly handled by the fax gateway, it is necessary
	that the MSFAX.DRV file that ships with the Gateway to Microsoft FAX be used in
	lieu of the MSFAX.DRV that ships with Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbMailSearch kbOffice97Search kbMailGateSearch kbOffice95Search kbOffice97 kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a; Win95:; :
	
	=============================================================================
	
