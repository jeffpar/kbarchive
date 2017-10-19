---
layout: page
title: "Q161565: Modifying Setup.log to Expedite File Repair"
permalink: /kb/161/Q161565/
---

## Q161565: Modifying Setup.log to Expedite File Repair

	Article: Q161565
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally it may be necessary to use the emergency repair disk (ERD) to
	repair a single system file that is known to be bad, or to skip a single file
	while repairing all others. Unfortunately, if the affected file is not near the
	top of the list in the Setup.log file, it may take considerable time to click
	through each of the files until the correct file appears. This article outlines
	a procedure to work around this issue.
	
	WORKAROUND
	==========
	
	To repair a single bad file or to skip a file while repairing all others,
	complete the following steps:
	
	1. Remove the attributes from the Setup.log file by typing the following at the
	  command line:
	
	  attrib -r -h -s a:\Setup.log
	
	2. Copy the Setup.log file from the floppy to a second computer.
	
	3. Use a text editor such as Notepad to modify Setup.log.
	
	4. From the Search pull-down menu, use the Find command to locate the desired
	  file.
	
	5. Select the entire line that the file is in, delete the line with the Cut
	  command, then Paste it at the top of list, immediately under the heading:
	
	  [Files.WinNT]
	
	6. Save the modified Setup.log file back to the floppy disk, maintaining the
	  original on the second computer so it can be restored if needed.
	
	7. Run the ERD. The first file that will appear is NTLDR. You may either skip
	  (press ESC) or select repair of this file, as desired.
	
	  The next file to appear will be the file that you moved to the top of the
	  list. If this is the only file that must be repaired, select the replace
	  option (press ENTER) and then select F3 to exit the repair process. The
	  desired file will be repaired leaving all others untouched.
	
	  If this file is to be skipped and all other files repaired, skip the File
	  (press ESC) and then select repair all (press A) to perform repair Of all
	  remaining files.
	
	Additional query words: prodnt erd
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
