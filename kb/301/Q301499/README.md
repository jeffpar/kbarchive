---
layout: page
title: "Q301499: HOW TO: Use Windows Backup to Make a Data Backup of IIS 4.0"
permalink: /kb/301/Q301499/
---

## Q301499: HOW TO: Use Windows Backup to Make a Data Backup of IIS 4.0

{% raw %}

	Article: Q301499
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- How to Create the Backup
	- Best Practices
	- Troubleshooting
	
	SUMMARY
	=======
	
	This step-by-step article describes how to use the Windows NT 4.0 backup tool
	(NTbackup.exe) to backup Internet Information Server (IIS) 4.0 content. By
	performing these steps, you are not actually backing up the IIS program, but you
	are safeguarding the Web content.
	
	
	Requirements
	------------
	
	- A tape storage device that is attached to the computer from which you wish to
	  make the backup.
	
	- You must be an administrator or a backup operator to back up files and
	  folders.
	
	How to Create the Backup
	------------------------
	
	1. Insert a tape into your tape storage device.
	
	2. From the desktop, click Start, point to Programs, point to Administrative
	  Tools (Common), and then click Backup.
	
	3. At the bottom of the Backup screen, expand the Drives folder.
	
	4. Double-click to expand the drive letter that contains your content. The
	  default content location for IIS is c:\InetPub\wwwroot, so you would double
	  click the C drive in the My Computer folder. You may have content on other
	  drives or in other folders as well.
	
	5. Click the X next to the drive letter to clear all check boxes below it.
	
	6. Select the check box next to the InetPub folder. Select the check boxes next
	  to any other virtual Web content folders that you may have.
	
	7. Click Backup.
	
	8. You will see a progress dialog box. When the backup is complete, remove the
	  media and close the Windows Backup window. Please see the "Best Practices"
	  section in this article for information about how to use backups most
	  effectively.
	
	Best Practices
	--------------
	
	- Creating a backup log: Always create and print a backup log for each backup.
	  Keep a book of logs to make it easier to locate specific files. The backup
	  log is helpful when restoring data; you can print it or read it from any text
	  editor. Also, if the tape that contains the backup set catalog is corrupt,
	  the printed log can help you locate a file.
	
	- Retaining copies: Keep three copies of the media; keep at least one copy
	  offsite in a properly controlled environment.
	
	- Performing trial restorations: Perform a trial restoration periodically to
	  verify that your files were properly backed up. A trial restoration can
	  uncover hardware problems that do not show up with software verifications.
	
	- Securing devices and media: Secure both the storage device and the backup
	  media. It is possible for someone to access the data from a stolen medium by
	  restoring the data to another server for which they are an administrator.
	
	Troubleshooting
	---------------
	
	If you receive a message telling you that the media is invalid, insert a
	different tape into the drive.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
