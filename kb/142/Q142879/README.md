---
layout: page
title: "Q142879: HOWTO: Set Up Directory Annotation for Internet Server FTP"
permalink: /kb/142/Q142879/
---

## Q142879: HOWTO: Set Up Directory Annotation for Internet Server FTP

{% raw %}

	Article: Q142879
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up directory annotation for Internet Server
	FTP.
	
	MORE INFORMATION
	================
	
	Directory Annotation Files
	--------------------------
	
	You can add directory descriptions to inform FTP users of the contents of
	directories on the server.
	
	Use the following steps to annotate files:
	
	1. Create a file named ~ftpsvc~.ckm in the directory to be annotated. Using an
	  editor, create the information to be displayed.
	
	2. In the Windows NT File Manager, select the file, and make it a hidden file,
	  so directory listings do not display this file.
	
	Directory annotation can be toggled by FTP users on a user-by-user basis with a
	built-in, site-specific command called ckm. This will vary depending on the FTP
	client used. For a Microsoft FTP client, the command "literal SITE CKM" will
	toggle annotations for the FTP client on or off.
	
	To change the FTP Server service configuration in the Registry:
	
	1. Edit the Windows NT Registry with Regedt32.exe. When the Registry Editor
	  window appears, you can press F1 to get Help on how to make changes in the
	  Registry Editor.
	
	2. In Registry Editor, click the window titled HKEY_LOCAL_MACHINE on the local
	  machine, and then click the icons for the SYSTEM subtree until you reach the
	  following subkey:
	
	  ..\SYSTEM\CurrentControlSet\Services\msftpsvc\Parameters
	
	All of the parameters described here are found under the preceding Registry
	subkey. This value of this Registry subkey does not appear by default in the
	Registry, so you must add an entry if you want to change its default value.
	
	  AnnotateDirectories
	
	  Data type = REG_DWORDRange = 0 or 1   Default = 0 (false -- that
	  is, directory annotation is off).
	
	The preceding value defines the default behavior of directory annotation for
	newly connected users. Directory descriptions are used to inform FTP users of
	the contents of a directory on the server. The directory description is saved in
	a file named ~ftpsvc~.ckm, which is usually a hidden file. When this value is 1,
	directory annotation is enabled.
	
	Additional query words: prodiis 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : winnt:1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
