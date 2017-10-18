---
layout: page
title: "Q160569: SMS: Inventory &amp; Audit Differences &amp; How to Perform an Audit"
permalink: kb/160/Q160569/
---

## Q160569: SMS: Inventory &amp; Audit Differences &amp; How to Perform an Audit

	Article: Q160569
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbDatabase smshowto smsdatabasekbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some differences between software inventories and audits,
	and describes the procedure to create an audit.
	
	The following are some differences between audits and software inventories:
	
	- A software inventory occurs during client inventory, while an audit occurs
	  when it is run from Package Command Manager (PCM).
	
	- A software inventory does not need to be distributed, because distribution
	  occurs automatically through the Package.rul file
	  (Sms\Site.srv\Maincfg.box\Pkgrule), and is automatically copied to each
	  Logon.srv directory as Pkg_16.cfg. You must send out an audit as a job.
	
	- A software inventory affects all Systems Management Server users logging in,
	  while an audit will only be run by the clients to whom it was sent.
	
	- A software inventory needs to be defined, and clients will access the
	  Pkg_16.cfg file (inventory criteria) during login from the Logon.srv
	  directory. An audit uses the Audit.rul file to define the search criteria.
	
	- The Run or Share Packages commands can also be defined as software inventory
	  packages, if you select "Inventory This Package" (this allows automatic
	  software inventory of Systems Management Server distributed packages). Audits
	  detect only those packages defined in the Audit.rul file.
	
	- A software inventory can be set to collect files, but an audit cannot.
	
	MORE INFORMATION
	================
	
	To create an audit, perform the following steps:
	
	1. At the Systems Management Server site server, open a command prompt.
	
	2. Locate the Sms\Primsite.srv\Audit directory
	
	3. Run the command
	
	  Rul2cfg Audit.rul
	
	  at a command prompt. You will see the messages "Compile succeeded" and "1
	  file(s) copied" three times.
	
	4. Open File Manager and share the Sms\Primsite.srv\Audit\Package directory as
	  "package."
	
	5. Run the Systems Management Server Administrator program and select the
	  package window.
	
	6. On the File menu, click New.
	
	7. Click Import.
	
	8. Select Sms\Primsite.srv\Import.src\Enu in the Directories box.
	
	9. Click Audit.pdf and then click OK.
	
	10. Click Workstation.
	
	11. Enter the source directory (for example, \\Smsserver\Package), and click
	  Close.
	
	12. Click OK, and then click OK again to "Update the package at all sites."
	
	13. On the File menu, click Open. Select the Sites window.
	
	14. On the Window menu, click Tile Horizontally.
	
	15. Drag the package to the site or client(s) that you intend to run the audit
	  on. A Jobs window will open.
	
	16. Click OK.
	
	17. Click Schedule and change the priority to High. Click OK.
	
	18. Type a comment (for example, "Test audit"), and click OK.
	
	The package will now be pending until the next process polling cycle. You can
	monitor the package's progress by viewing the SCHED, DESPOOL, and LANSEND log
	files, as well as by monitoring the job in the Jobs window (to do this, double
	click on the job, click Status, and then click Details).
	
	After the package is offered to the client's Package Command Manager, run the
	package. If packages are found, there will be a new icon in the Personal
	Computer Properties called "Audited Software."
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbDatabase smshowto smsdatabase kbfaq
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	
