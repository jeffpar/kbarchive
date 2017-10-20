---
layout: page
title: "Q248145: XCLN: Team Folder Shows Inbox Instead of Current Folder"
permalink: /kb/248/Q248145/
---

## Q248145: XCLN: Team Folder Shows Inbox Instead of Current Folder

{% raw %}

	Article: Q248145
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Team Folders Wizard to create a public team folder on the
	Exchange Server computer, the wizard installs everything correctly, but for some
	users, all the views in the team folder display the Inbox instead of the correct
	public folder.
	
	MORE INFORMATION
	================
	
	This behavior occurs because the person viewing the team folder does not have
	access to view a folder or items within a folder somewhere in the public folder
	path where the team folder was created. When the permissions are set in this
	manner, the properties set on the Outlook View Control ActiveX control are not
	set correctly, and the HTML file defaults to the Inbox.
	
	For example, if you create a public folder in the path
	"AllPublicFolders\Company\TeamFolders\MyTeamFolder," and you have full
	permissions to the TeamFolders folder, but can only view folders, not items
	within the Company folder, all of the views in the TeamFolders folder are
	displayed in your Inbox instead of in the public folder.
	
	This behavior also occurs if a folder in the path is hidden to the user.
	Therefore, the best practice is to create the team folder structure in a path on
	which all users accessing the team folder have reviewer or better permissions.
	The person creating the team folder needs reviewer permissions on all folders in
	the path and author, or better, permissions on the folder that the team folder
	is added to.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
