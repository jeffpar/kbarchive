---
layout: page
title: "Q129548: Cannot Open Attachment With Spaces In File Name In MSMAIL32"
permalink: /kb/129/Q129548/
---

## Q129548: Cannot Open Attachment With Spaces In File Name In MSMAIL32

{% raw %}

	Article: Q129548
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Mail (MSMAIL32.EXE) and attempt to open an attached file
	that has spaces in the file name, the following error message appears:
	
	  The application for the attached file '<file name.ext>' (or one of its
	  components) could not be found.
	
	TO REPRODUCE THE PROBLEM
	------------------------
	
	1. Create a file name with spaces in the name, for example:
	
	  "This is a small file.txt"
	
	  but without the quotation marks.
	
	2. Create a second file, with a long file name, but without spaces in the name,
	  for example:
	
	  Thisismylongfilename.txt
	
	3. Start the Windows NT Mail client, create a new message and choose Attach.
	  Change to the directory that contains the two files created.
	
	  NOTE: The full file name appears in the dialog box!
	
	4. Select both files and choose Attach.
	
	  Both files are attached to the message, and the correct names appear.
	
	5. Try to doubleclick the file with spaces in the name ("This is a small
	  file.txt").
	
	  The following error message appears:
	
	  No application is associated with...
	
	6. Try to doubleclick the file without spaces in the name
	  (Thisismylongfilename.txt).
	
	  This works correctly.
	
	The same symptom occurs if you choose Save Attachment from the File menu. The
	dialog box offers the whole file name of the attached file but it does not offer
	the option to save the attached file with this name.
	
	
	CAUSE
	=====
	
	When you doubleclick on the file attachments, Windows NT saves them in the
	following manner to TEMP directory:
	
	  Original File Name            File Name Saved by Windows NT
	  -----------------------------------------------------------
	  This is a small file.txt      thisisas
	  Thisismylongfilename.txt      thisismy.txt
	
	The "thisisas" file name does not have a *.txt extension and therefore the error
	message above appears.
	
	WORKAROUND
	==========
	
	To work around this problem, save the attached file to a local drive and then
	open it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1, 3.5 and
	3.51. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodnt attachment
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
