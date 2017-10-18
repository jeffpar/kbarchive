---
layout: page
title: "Q115732: PRB: FoxPro for Macintosh Changes Database's Icon After PACK"
permalink: kb/115/Q115732/
---

## Q115732: PRB: FoxPro for Macintosh Changes Database's Icon After PACK

	Article: Q115732
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users can change the icon associated with a FoxPro database from the standard
	FoxPro icon to one of their preference by choosing Get Info from the File menu;
	this opens a dialog box where the icon can be selected and then copied or
	pasted. However, if a record in the database is marked for deletion and a PACK
	command is issued, the icon changes from the users' icon to the FoxPro default
	icon.
	
	RESOLUTION
	==========
	
	Instead of issuing a PACK command, use the code below as a workaround.
	
	In the following example, CUSTOMER is the database that contains the record that
	has been marked for deletion and TEMP is a temporary database:
	
	     USE customer
	     COPY TO temp.dbf FOR NOT DELETED()
	     USE temp
	     SET SAFETY OFF
	     COPY TO customer.dbf
	     SET SAFETY ON
	     USE
	     DELETE FILE temp.dbf
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
