---
layout: page
title: "Q119254: PC Win: Converting Local Private Folders Doesn't Delete .FLD"
permalink: /kb/119/Q119254/
---

## Q119254: PC Win: Converting Local Private Folders Doesn't Delete .FLD

{% raw %}

	Article: Q119254
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for Windows includes a utility called CONVERT.EXE that converts
	Microsoft Mail MS-DOS client folders and Microsoft Mail for Windows version 2.1
	folders so that they can be used with versions 3.0 and 3.2 of Microsoft Mail for
	Windows. Microsoft Mail version 2.1 stores private folders in .FLD files. These
	.FLD files are indexed with the .IDX file. These folders can be stored on the
	server or locally. When the folders are stored locally, the user's .IDX file and
	.FLD files are moved to the path specified by the user.
	
	MORE INFORMATION
	================
	
	CONVERT.EXE is a Windows utility that reads the .IDX file and then copies the
	information from the .FLD files into your .MMF file. When the CONVERT utility is
	finished copying the information, the following dialog box will appear:
	
	  Convert has successfully transferred your old messages to the new format. If
	  you do not need the old messages, you may delete them at this time. Do you
	  want to keep the old messages?
	
	You can choose YES to keep the .IDX file and .FLD files or choose NO to reset the
	.IDX file back to 100 bytes and delete the .FLD files. If the folders were
	stored on the server, the .FLD files will be deleted successfully. However, if
	the folders were stored locally, the IDX file will be reset but the .FLD files
	will not be deleted. The .FLD files will no longer be accessible via the MS-DOS
	Mail client but they will still exist in the directory where they were stored
	locally. Therefore, you will need to delete the .FLD files located on the local
	workstation.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
