---
layout: page
title: "Q142704: Windows NT Mail Client Does Not Handle Long Filenames Correctly"
permalink: /kb/142/Q142704/
---

## Q142704: Windows NT Mail Client Does Not Handle Long Filenames Correctly

{% raw %}

	Article: Q142704
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attach files with long filenames including spaces (for example: "This
	is a long name.txt") from the Windows NT mail client, they appear to attach
	correctly, but when you try to open them you receive the error, "No application
	is associated with file name."
	
	NOTE: Long file names without spaces (for example: "Thisisalongname.txt") work
	correctly.
	
	The same problem happens when you try to Save Attachment. The dialog box offers
	you the complete filename of the attached file, but it does not allow you to
	save it with this name.
	
	CAUSE
	=====
	
	Opening the files causes them to be saved to TEMP directory in the following
	format:
	
	  "This is a small file.txt" becomes  "thisisas"
	  "Thisismylongfilename.txt" becomes  "thisismy.txt"
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
