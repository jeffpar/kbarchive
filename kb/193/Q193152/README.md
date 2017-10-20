---
layout: page
title: "Q193152: Preserving Virtual Directories and Servers During Uninstall"
permalink: /kb/193/Q193152/
---

## Q193152: Preserving Virtual Directories and Servers During Uninstall

{% raw %}

	Article: Q193152
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to uninstall and reinstall Internet Information Server
	(IIS). If there are directory mappings to virtual servers, these mappings will
	be lost during the uninstall process unless the following steps are followed.
	
	MORE INFORMATION
	================
	
	To create a backup of the IIS 4.0 metabase, perform the following steps:
	
	1. Open the Microsoft Management Console (MMC).
	
	2. Expand the Internet Information Server snap-in under Console Root.
	
	3. Right-click on the name of your computer.
	
	4. Select the Backup/Restore Configuration option. This will display a dialog
	  box that allows you to make a backup of the entire IIS 4.0 metabase for that
	  computer.
	
	5. After you back up the metabase, close the MMC.
	
	6. When you are prompted to save the settings in the Iis.msc file, click Yes.
	
	7. In Windows NT Explorer, copy the <%System_Root%>\System32\Inetsrv
	  folder to a disk or another drive partition.
	
	To view and confirm settings for virtual servers, you can use the MetaEdit
	utility that comes with the IIS 4.0 Resource Kit.
	
	IMPORTANT: Some of the instructions below regard the use of MetaEdit, which is
	found on the IIS 4.0 Resource Kit. Microsoft Product Support Services is unable
	to provide support for MetaEdit at this time.
	
	To view virtual directories in the IIS 4.0 metabase, start MetaEdit and expand
	the folder for LM\W3SVC. In the directory tree below, you will see folders
	numbered 1, 2, and possibly 3 and beyond. Sites 1 and 2 are created by IIS Setup
	for the default and administrative Web sites, respectively. Subsequent folders
	are mapped to virtual servers created by the user, assigned in the order in
	which they were created. For example:
	
	  1
	  (Default Site Settings)
	     virtual directories
	
	  2
	  (Admin Site Settings)
	      virtual directories
	
	  3
	  (Added Virtual Server Settings)
	     virtual directories
	
	  and so on.
	
	FTP virtual servers are mapped similarly. For example:
	
	  LM\MSFTPSVC\ 
	     1
	     (default FTP site)
	        virtual directories
	     2
	     (Added FTP Server Settings)
	        virtual directories
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185383 : How to Remove and Reinstall IIS 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
