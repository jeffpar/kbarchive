---
layout: page
title: "Q101886: MS-DOS Shell Displays Undelete's Hidden Sentry Directory"
permalink: /kb/101/Q101886/
---

## Q101886: MS-DOS Shell Displays Undelete's Hidden Sentry Directory

{% raw %}

	Article: Q101886
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SENTRY directory created by Microsoft Undelete is always displayed in MS-DOS
	Shell, even though it has the Hidden attribute.
	
	MORE INFORMATION
	================
	
	Delete Sentry provides the highest level of protection to ensure that you can
	recover deleted files. This level of protection creates a hidden directory named
	SENTRY. When you delete a file, Undelete moves the file from its current
	location to the SENTRY directory.
	
	The SENTRY directory is created when you load Microsoft Undelete with Delete
	Sentry protection enabled. For more information on Delete Sentry, see pages
	83-89, "Recovering Deleted Files," in the "User's Guide," or query on the
	following words in the Microsoft Knowledge Base:
	
	  " undelete and sentry " (without the quotation marks)
	
	The hidden SENTRY directory always appears in the Shell directory tree listing,
	regardless of whether or not the Display Hidden/System Files option is selected
	in the File Display Options dialog box. This occurs because the MS-DOS Shell is
	designed to always show directories with the Hidden or System attribute.
	
	If Undelete is loaded with the /LOAD switch (specifying Delete Sentry
	protection), you cannot delete the files in the SENTRY directory from the MS-DOS
	command prompt, Shell, or File Manager. To remove the files in this directory,
	using the /PURGE switch is recommended.
	
	To manually delete files from the SENTRY directory, restart the computer without
	loading Delete Sentry and then delete the files.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide" for version 6, pages 83-89.
	
	"Microsoft MS-DOS 6 Technical Reference," pages 345-351.
	
	Additional query words: 6.00 trashcan wastebasket dir
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
