---
layout: page
title: "Q126521: XGEN: Tech Resource Kit: Renaming a Server"
permalink: /kb/126/Q126521/
---

## Q126521: XGEN: Tech Resource Kit: Renaming a Server

{% raw %}

	Article: Q126521
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article discusses the supported steps to rename a
	Microsoft Exchange Server. This information is also available in the document
	Rename.doc, available in the Microsoft Exchange Resource Kit.
	
	MORE INFORMATION
	================
	
	CAUTION: When you rename a server you lose:
	
	- All connector/DXA configurations on the server.
	
	- All non-recipient configurations on the server.
	
	- All profiles for users that connect to the server.
	
	1. Disconnect all clients from the server.
	
	2. In the "Microsoft Exchange Server Administrator" program, click the Server
	  object.
	
	3. From the File menu, click Properties, and then click the Advanced tab.
	
	4. Under "DS/IS Consistency Adjustment", select all inconsistencies, and click
	  Adjust. This step ensures that the information store is up-to-date.
	
	5. From the Tools menu, click Directory Export.
	
	6. Ensure that the Assoc-NT-Account field has been exported. You use this file
	  to restore the mailbox, distribution list, and custom recipient permissions.
	
	7. Quit all Microsoft Exchange Server services.
	
	8. Back up \Dsadata\Dir.edb.
	
	9. Back up \Mdbdata\Priv.edb and Pub.edb.
	
	10. Run the Microsoft Exchange Server Setup program, and then click Remove All.
	
	11. Restart your computer.
	
	12. Delete \Exchsrvr.
	
	13. In the Main program group, double-click Control Panel.
	
	14. Double-click Network, and then rename the server.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q150298 Renaming a Windows NT PDC or BDC
	
	15. Restart your computer.
	
	16. Run the Microsoft Exchange Server Setup program. Select the same
	  organization and site names as before.
	
	17. Restart your computer. Reapply Service Pack 2 (SP2) if SP2 was applied to
	  the prior server.
	
	18. Quit all Microsoft Exchange Server services.
	
	19. Delete *.log from \Dsadata and \Mdbdata.
	
	20. Restore \Mdbdata\Priv.edb and Pub.edb.
	
	  IMPORTANT: Do not restore the files from \Dsadata.
	
	21. Restart the Microsoft Exchange Server services.
	
	22. Run DS/IS Consistency Adjustment again. The consistency adustment may
	  re-create the directory without any permissions.
	
	23. Import the directory file created in step 4. Be sure to select Append under
	  Multi-Valued Properties.
	
	Your server should now be running with the same mailboxes and public folders but
	with a new server name.
	
	Additional query words: docrepro rename doc priv edb pub
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
