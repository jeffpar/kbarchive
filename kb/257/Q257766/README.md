---
layout: page
title: "Q257766: XADM: How to Move Exchange Server Folders"
permalink: /kb/257/Q257766/
---

## Q257766: XADM: How to Move Exchange Server Folders

{% raw %}

	Article: Q257766
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may want to move the Exchange Server folders that contain
	databases or log files to different drives or locations. This article discusses
	how to use either the Exchange Server Administrator program or Performance
	Optimizer (Perfwiz.exe) to move these folders to another location.
	
	MORE INFORMATION
	================
	
	Before you move files and folders, back up your server.
	
	Moving Exchange Server Folders Using the Exchange Server Administrator Program
	------------------------------------------------------------------------------
	
	If you use the Exchange Server Administrator program to move the database paths,
	make sure that the new database path exists before you attempt the move, or the
	following error message is displayed:
	
	  The specified path is not valid or is incomplete or is not local or does not
	  exist. Specify a valid path name. (i.e. C:\Exchsrvr\Dsadata)
	
	To move the folder paths:
	
	1. In the Exchange Server Administrator program, click to expand the Site
	  container, click to expand the Configuration container, and then click to
	  expand the Servers container.
	
	2. Click to select the server that you want to modify.
	
	3. On the File menu, click Properties.
	
	4. Click the Properties tab, and then click Database Paths. On the Database
	  Paths tab, the current folders and their locations are displayed.
	
	5. Click to select the item that you want to move.
	
	6. Click Modify to open Directory Database Move window.
	
	7. In the Path box, enter the new path. After Exchange Server stops the
	  appropriate services, move the files that you selected, and then restart the
	  services.
	
	NOTE: You cannot select the root of the drive.
	
	After you create the new path, if you attempt to move logs to a drive or disk
	that does not have enough space, the following error message is displayed:
	
	  There is not enough disk space to move <name_of_your_selection>.
	
	In addition, any subsequent moves are not processed. The list is processed from
	the top to bottom. The change is displayed until you click Cancel.
	
	Moving Microsoft Exchange Server Folders Using Performance Optimizer
	--------------------------------------------------------------------
	
	The Exchange Server Performance Optimizer utility (Perfwiz.exe) is located in the
	Exchsrvr\Bin folder. To move folders by using Performance Optimizer:
	
	1. Start Performance Optimizer. A welcome dialog box that warns that the
	  services will be stopped is displayed. Click Next to stop the services.
	
	2. When the System Parameters Setting dialog box is displayed, which contains
	  the existing parameters of your Exchange Server computer, click Next. The
	  Performance Optimizer begins analyzing your hard disk. (This can be a time
	  consuming step.)
	
	3. When the following message is displayed, click Next:
	
	  Disk analysis has completed. Click Next to continue.
	
	4. A list of the Exchange Server components, their current location, and their
	  suggested location are displayed.
	
	5. To move a folder, in Suggested Location, enter the location that you want to
	  use. Make sure that no other path has been changed.
	
	  IMPORTANT: You must pay close attention to the Current Location and Suggested
	  Location boxes. Performance Optimizer moves files to drives based on specific
	  criteria. It changes the Suggested Locations setting for folders.
	
	  Click Next.
	
	6. Microsoft recommends that you select the "Move files Automatically" option.
	  If you choose the "Move files Automatically" option, the files are moved when
	  you click Next. If you do not choose this option, you need to manually move
	  the files before you start the services. Click Next.
	
	7. The final Performance Optimizer dialog box confirms that the changes were
	  made successfully and gives you the option to start the services:
	
	   - If you selected the "Move files Automatically" option to allow Performance
	     Optimizer to move the files, start the services.
	
	   - If you chose to manually move the files, click to select the "Do Not Start
	     these Services" check box, move the files to the folder that you
	     specified, and then start the services (in Control Panel, double-click
	     Services).
	
	NOTE: If your Exchange server is clustered using Microsoft Clustering Services,
	please use this article instead:
	
	  Q278464 Changing the Exchange Server Database Paths on a Cluster[exchange]
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
