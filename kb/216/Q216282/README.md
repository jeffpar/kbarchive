---
layout: page
title: "Q216282: Encarta Reference Suite 99: Network Installation Instructions"
permalink: /kb/216/Q216282/
---

## Q216282: Encarta Reference Suite 99: Network Installation Instructions

{% raw %}

	Article: Q216282
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbimu
	Last Modified: 01-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Microsoft Encarta Reference Suite 99 for
	use over a network.
	
	MORE INFORMATION
	================
	
	To install Encarta Reference Suite 99 for use over a network, follow these
	steps:
	
	1. Create a folder for the Encarta Reference Suite 99 files on your server's
	  hard disk.
	
	2. Insert the Installation And Resources CD-ROM into your CD-ROM drive.
	
	  NOTE: Press and hold down the SHIFT key as you insert the CD-ROM into the
	  CD-ROM drive to prevent Encarta Reference Suite 99 Setup from starting
	  automatically.
	
	3. Double-click My Computer.
	
	4. Right-click the CD-ROM drive icon, and then click Explore.
	
	5. On the Edit menu, click Select All.
	
	6. On the Edit menu, click Copy.
	
	7. Double-click the folder you created in step 1.
	
	8. On the Edit menu in this folder, click Paste.
	
	  NOTE: If you are prompted to replace an existing file, click Yes To All.
	
	9. Repeat steps 2-8 for each CD-ROM included in Encarta Reference Suite 99.
	
	10. Share the folder you created in step 1 with Read permissions to prevent
	  users from changing the folder contents.
	
	After you complete these steps, you must configure each client workstation to
	gain access to the Encarta Reference Suite 99 files. To do this, follow these
	steps on each client workstation:
	
	1. Click Start, and then click Run.
	
	2. In the Run box, type the following line:
	
	  \\<server>\<folder>\setup.exe
	
	  where <server> is the name of the server and <folder> is the name
	  of the folder in which the Encarta Reference Suite 99 files are located.
	
	  NOTE: The path to the folder containing the Encarta Reference Suite 99 files
	  must remain the same in order for Encarta Reference Suite to run properly. If
	  you move the Encarta Reference Suite 99 files to a new location, you must run
	  the installation program again from this location.
	
	3. Follow the instructions on the screen to install Encarta Reference Suite 99
	  on the client workstation.
	
	NOTE: To install Encarta Reference Suite 99 on a Microsoft Windows NT 4.0-based
	computer, you must be logged on to the computer as an Administrator.
	
	Additional query words: multi multi-media media mm shared winnt
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference99
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
