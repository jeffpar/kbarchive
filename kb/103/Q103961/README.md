---
layout: page
title: "Q103961: PC Forms: Icon Not Displayed in Routing Form"
permalink: kb/103/Q103961/
---

## Q103961: PC Forms: Icon Not Displayed in Routing Form

	Article: Q103961
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are reading a form created using the Routing Form included with version
	1.0 of Microsoft Electronic Forms Designer, the icon for the enclosed file may
	not be displayed. This problem can occur if the file enclosed is an executable
	file or if it is a document that does not have a file association.
	
	CAUSE
	=====
	
	The Routing Form does not send the icon with the form. The Routing Form obtains
	the icon by extracting it from the executable file associated with the enclosed
	document. (Associations for files are defined in the Windows File Manager
	program.)
	
	The icon is handled this way because the associated application may change from
	recipient to recipient. For example, one user may have .TXT files associated
	with Microsoft Word for Windows, another user may associate those files with
	Notepad, and still another user may associate those files with Write.
	
	Therefore, the icon may not be displayed if there is no associated executable
	file from which to extract the icon or if the enclosed file is an executable
	file.
	
	RESOLUTION
	==========
	
	To create an association for a file, perform the following steps:
	
	1. Open File Manager.
	
	2. From the File menu, choose Associate.
	
	3. Type the extension in the Files With Extension box.
	
	4. In the Associate With box, select the application you want to associate with
	  the extension. (You can choose the Browse button to select a program.)
	
	5. Choose the OK button.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
