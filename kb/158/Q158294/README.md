---
layout: page
title: "Q158294: Registry Editor Could Not Accomplish the Requested Operation"
permalink: /kb/158/Q158294/
---

## Q158294: Registry Editor Could Not Accomplish the Requested Operation

	Article: Q158294
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Registry Editor (Regedt32.exe), and attempt to restore the registry
	information of a specific key by choosing Restore from the Registry menu, the
	following error message appears:
	
	  Registry Editor could not accomplish the requested operation.
	
	CAUSE
	=====
	
	This error can be caused by trying to restore a key that was saved with the Save
	Subtree As... option from the registry menu. This cause is described in this
	article.
	
	Additionally, attempting to use Load Hive with a key that was saved using Save
	Subtree As... causes the following error:
	
	  Registry Editor could not load the key.
	  The file is not a valid registry file.
	
	The error message indicated in the Symptoms section can also be caused by opening
	the registry of a remote computer and attempting to save the registry
	information of a specific key by clicking Save Key from the Registry menu.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q139600
	  TITLE : Registry Editor Save Key Saves Key on Wrong Computer
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	When saving the key, instead of clicking the Save Subtree As... option, click the
	Save Key option from the Registry menu. When trying to restore the key, click
	the Restore option from the Registry menu. The saved key will be restored
	without error.
	
	MORE INFORMATION
	================
	
	The Save Key option saves, as a file, the information contained in a registry
	key and in all of its subkeys. A file created using Save Key can be loaded into
	the registry (with Load Hive), or can be restored (with Restore). This format is
	readable by the Registry Editor and should be used when trying to move or save
	registry keys from one registry to another.
	
	The Save Subtree As... option saves the contents of the currently selected key as
	a text file, including all subkeys and value entries for that key. This format
	is used to provide a user readable text format for verifying all of the entries
	in a key or subkey, and it is not meant to move or save registry keys.
	
	Additional query words: prodnt registry restore subkey
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
