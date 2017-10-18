---
layout: page
title: "Q158346: XCLN: Err Msg: The Spelling Operation Could not be Completed"
permalink: kb/158/Q158346/
---

## Q158346: XCLN: Err Msg: The Spelling Operation Could not be Completed

	Article: Q158346
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you spell check a message, you might receive the following error:
	
	  The Spelling Operation could not be completed. The custom dictionary has not
	  been opened.
	
	This indicates that a custom dictionary has been set up.
	
	MORE INFORMATION
	================
	
	When you use the spelling tool in the Microsoft Exchange Client, it searches for
	the following entry in the registry for custom dictionaries:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools
	                    \Proofing Tools\Custom Dictionaries
	
	For information about how to edit the registry, see the Changing Keys And Values
	online Help topic in the Registry Editor. Note that you should make a backup
	copy of the registry files before you edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95 or Windows NT. Microsoft cannot guarantee
	that problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	To change the custom dictionary which is used for spelling or to specify it,
	follow these steps;
	
	1. Check the following entry in the registry:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools
	                       \Proofing Tools\ Custom Dictionaries
	
	2. Verify that the key contains the following value:
	
	     1  C:\Program Files\Common Files\Proof\custom.dic
	
	  NOTE: The path may differ depending on where you installed the files.
	
	  If this is not the correct path, or if no path is specified, edit the 1 value
	  to specify a valid custom dictionary file.
	
	The next time the Microsoft Exchange client is restarted, the spelling operation
	should complete successfully.
	
	If you have Microsoft Word 95 or later, you can reset all registry and INI files
	without using Regedit or Sysedit. To do this:
	
	1. Start Word.
	
	2. On the Tools menu, click Options.
	
	3. Select the Spelling&Grammer tab.
	
	4. Click the Dictionaries button.
	
	5. Select Custom.dic and click the Remove button.
	
	6. Exit Word.
	
	7. Start Word.
	
	8. On the Tools menu, click Options.
	
	9. Select the Spelling&Grammer tab.
	
	10. Click the Dictionaries button.
	
	11. Click the Add button and select Custom.dic.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
