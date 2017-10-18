---
layout: page
title: "Q148511: INFO: Default Content of the Srcsafe.ini File"
permalink: kb/148/Q148511/
---

## Q148511: INFO: Default Content of the Srcsafe.ini File

	Article: Q148511
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Srcsafe.ini file is the SourceSafe initialization file, and it must be
	present for SourceSafe to operate. The Srcsafe.ini file in the Server
	installation directory serves as a default for all users. The administrator can
	modify this file to change the behavior of SourceSafe. This article lists the
	default settings present in the Srcsafe.ini file.
	
	MORE INFORMATION
	================
	
	The default contents of the Server's Srcsafe.ini are as follows:
	
	     ; srcsafe.ini
	     ;
	     ; Three of these variables -- Data_Path, Users_Path, and Users_Txt --
	     ; must be in Srcsafe.ini. Any other variable here can be overridden in
	     ; Ss.ini.
	     ; Similarly, any Ss.ini variable can be placed in Srcsafe.ini to set a
	     ; system "default," which individual users can still override in Ss.ini.
	
	     ; The two important paths used by SourceSafe.
	     Data_Path = data
	     Temp_Path = temp
	
	     ; This tells admin where to put personal directories for new users.
	     Users_Path = users
	
	     ; From this, find users.txt; from that, in turn, find ss.ini for a user.
	     Users_Txt = users.txt
	
	     ; The following line contains common file groupings.
	     File_Types = Visual Basic (*.bas;*.cls;*.frm;*.frx;*.res;*.vbp;*.mak),
	  Visual C++ (*.cpp;*.c;*.hpp;*.h;*.rc;*.mak), Visual FoxPro
	  (*.pjt;*.pjx;*.frx;*.frt;*.scx;*.sct;*.vcx;*.vct;*.lbx;*.lbt;*.qpr;*.mnx;*.
	  mnt), MS Test (*.mst;*.inc)
	
	The Visual SourceSafe 5.0 Srcsafe.ini contains the additional entries:
	
	     Img_File = HTMLFILE.GIF
	     Img_Folder = FOLDER.GIF
	
	These set the glyphs used in displaying Folders and Web Projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
