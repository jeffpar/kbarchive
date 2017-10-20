---
layout: page
title: "Q192447: WD97: Errors Opening Files in a Map Root of a Novell 4.11 Server"
permalink: /kb/192/Q192447/
---

## Q192447: WD97: Errors Opening Files in a Map Root of a Novell 4.11 Server

{% raw %}

	Article: Q192447
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a map root to a Novell 4.11 server, and you attempt to open a
	document located on the server drive, Word may display error messages and fail
	to open the document.
	
	For example, when you are using a map root on a Novell server to the drive K:
	(\\servername\volumename) and the path to a document contains spaces
	(K:\Administrative Stuff\Primary Project Plan.doc), the following error messages
	may be displayed, and the document may not open.
	
	NOTE: There are spaces in the folder name and in the file name, but not in the
	server name or volume name.
	
	  This file could not be found. Try one or more of the following:
	  * Check the spelling of the name of the document.
	  * Try a different filename.
	  (K:\Administrative)
	
	When you click OK, the error message is followed by:
	
	  The document name or path is not valid. Try one or more of the following:
	  * Check the path to make sure it was typed correctly.
	  * On the File menu, click Open. Search for the file using this dialog box.
	  (Stuff\Primary)
	
	When you click OK, the error message is followed by:
	
	  This file could not be found. Try one or more of the following:
	  * Check the spelling of the name of the document.
	  * Try a different filename.
	  (Project)
	
	When you click OK, the error message is followed by:
	
	  This file could not be found. Try one or more of the following:
	  * Check the spelling of the name of the document.
	  * Try a different filename.
	  (Plan.doc)
	
	CAUSE
	=====
	
	You may be opening a document that contains spaces in either the folder name or
	in the file name.
	
	This problem may occur in Windows NT 4.0 Workstation with Service Pack 3 and
	Novell IntraNetWare client for Windows NT version 4.11F.
	
	This problem may also occur in Windows 95 using the Novell IntraNetWare client.
	
	NOTE: The Novell IntraNetWare client is the replacement for Novell NetWare Client
	32.
	
	RESOLUTION
	==========
	
	For a possible resolution to this problem, contact Novell Technical Support:
	
	For information about how to contact Novell Technical Support, query in the
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around the problem described in the
	"Symptoms" section of this article.
	
	Method 1: Map Root to the Server Folder
	---------------------------------------
	
	Map root to the server folder that contains the document.
	
	For example, in the example described in the Symptoms section of this article,
	map root to the Administrative Stuff folder, and then open the document in Word
	97 for Windows.
	
	NOTE: The map root of drive K:\ in the example would become
	"\\servername\volumename\Administrative Stuff", and the document name to open
	would be K:\Primary Project Plan.doc
	
	Method 2: Use the DontUseUNC Option
	-----------------------------------
	
	The DontUseUNC registry setting allows the use of drive letter mappings and
	disables the use of Universal Naming Convention (UNC).
	
	NOTE: This method may not work in all cases experiencing the problem described in
	the "Symptoms" section of this article.
	
	For additional information about the DontUseUNC option, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q171406 WD97: How to Disable the Use of UNC
	
	Method 3: Open the Document from Windows Explorer
	-------------------------------------------------
	
	In Windows Explorer, double-click the document to open it in Word 97 for Windows.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Word 97 for Windows and Novell
	IntraNetWare.
	
	Additional query words: space file filename errors cannot can't fails won't
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
