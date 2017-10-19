---
layout: page
title: "Q258257: XADM: How to Verify Object-Version When Troubleshooting DIR_REP"
permalink: /kb/258/Q258257/
---

## Q258257: XADM: How to Verify Object-Version When Troubleshooting DIR_REP

	Article: Q258257
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to verify the Object-Version of the DIR_REP connector
	when you troubleshoot problems with directory replication.
	
	MORE INFORMATION
	================
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk. To verify the
	Object-Version of the DIR_REP connector:
	
	1. To start the Microsoft Exchange Server Administrator program in raw mode,
	  type the following command at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Connect to a server in one of the two sites that are involved in directory
	  replication. The connected site name appears in bold. In this article, the
	  site is referred to as SITE A.
	
	3. Expand the Configuration container under SITE A.
	
	4. Click the directory replication object in the left pane, and then click RAW
	  Properties on the File menu for the directory replication connector in the
	  right pane.
	
	5. In the "Object attributes" section, locate and click Object-Version.
	
	6. Note the value in the "Edit value" box. For the purpose of this example, it
	  is assumed that the value is 2, for example:
	
	  SITE A = 2
	
	7. With the focus still on SITE A, locate the other site that is involved in
	  directory replication, and then expand it. This site name does not appear in
	  bold. For the purpose of this example, this site is referred to as SITE B.
	
	8. Expand the Configuration container under SITE B.
	
	9. Click the directory replication object in the left pane, and then click RAW
	  Properties on the File menu for the directory replication connector in the
	  right pane.
	
	10. In the "Object attributes" section, locate and click Object-Version.
	
	11. Note the value in the "Edit value" box. For the purpose of this example, it
	  is assumed that the value is 4, for example:
	
	  SITE B = 4
	
	12. To connect to a server in SITE B (SITE B now appears in bold), expand the
	  Configuration container under SITE B.
	
	13. Click the directory replication object in the left pane, and then click RAW
	  Properties on the File menu for the directory replication connector in the
	  right pane.
	
	14. In the "Object attributes" section, locate and click Object-Version.
	
	15. Note the value shown in the "Edit value" box. For the purpose of this
	  example, it is assumed that the value is 4, for example:
	
	  SITE B = 4
	
	16. With the focus still on SITE B, locate the other site that is involved in
	  directory replication, and then expand it. Note that SITE A does not appear
	  in bold.
	
	17. Expand the Configuration container under SITE B.
	
	18. Click the directory replication object in the left pane, and then click RAW
	  Properties on the File menu for the directory replication connector in the
	  right pane.
	
	19. Under the "Object attributes" section, locate and click Object-Version.
	
	20. Note the value in the "Edit value" box. For the purpose of this example, it
	  is assumed that the value is 2, for example:
	
	  SITE A = 2
	
	In this scenario, the directory replication connector between SITE A and SITE B
	is synchronized and functioning correctly.
	
	The Object-Versions between SITE A and SITE B must match, for example:
	
	SITE A = x   SITE B = y
	
	SITE B = y   SITE A = x
	
	If the Object-Versions do not match, you need to make a change, such as adding an
	administrative note multiple times to raise the lower of the two Object-Version
	numbers above the other.
	
	For additional information about troubleshooting directory replication to or from
	a restored directory, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q201414 XADM: Restored Directory Not Replicating Out to Other Servers
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
