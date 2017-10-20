---
layout: page
title: "Q200852: SMS: Troubleshooting Software Inventory Problems"
permalink: /kb/200/Q200852/
---

## Q200852: SMS: Troubleshooting Software Inventory Problems

{% raw %}

	Article: Q200852
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbInventory
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	1. Ensure Software Inventory has been enabled on the Site Server. Look in the
	  SMS Administrators Console under the Site Hierarchy menu, click Site Code,
	  Site Name, Site Settings, Client Agents, and Software Inventory Agent.
	
	2. Check that the client has been discovered and that the Software Inventory
	  Client Agent is enabled, installed on the client, and has been given at least
	  30 minutes to begin the inventory process.
	
	3. Check both %windir%\MS\SMS\LOGS\CCIM32.LOG and CLISVCL.LOG for errors in the
	  client installation process and initial inventory.
	
	4. Verify that the client's %windir%\MS\SMS\Clicomp\Sinv\Sinvdat.sid (or .sic if
	  initial inventory) file is not stuck here.
	
	5. Next, verify that the inventory(*.inv) file is not stuck in the
	  %windir%\MS\SMS\Clicomp\Sinv\Outbox\*.inv directory.
	
	6. Check log %windir%\MS\SMS\LOGS\SINV32.LOG that the inventory process has run
	  for errors in steps 4 and 5.
	
	7. Verify that the client's Copy Queue Manager has moved the file to its CAP
	  Site System in CAP_<SiteCode>\Sinv.box\*.sic or *.sid.
	
	8. Check log %windir%\MS\SMS\LOGS\CQMGR32.LOG for errors in step 7.
	
	9. Next, on the Site Server, verify that Inbox Manager Assistant has moved the
	  *.sic or *.sid from the CAP to the Site Server's SMS\Inboxes\Sinv.box
	  directory.
	
	10. Check log \SMS\Logs\INBOXAST.LOG for errors in step 9.
	
	  NOTE: If the client belongs to a Secondary Site check the
	  SMS\Inboxes\Sinv.box directory. Also, check the Replication Manager log
	  \SMS\Logs\REPLMGR.LOG for errors in moving the file to the Primary site.
	
	11. Look in the Site Server's SMS\Inboxes\Sinv.box\Orphans directory for a *.sic
	  or *.sid file. If there is one, see if the client has been discovered. If
	  not, the Software Inventory Processor moves the inventory file to an Orphans
	  directory on the site server under \SMS\Inboxes\Sinv.Box location and
	  retries every 10 minutes. Eventually, the Software Inventory Processor
	  writes a DDR (Discovery Data Record) and hands it off to the Discovery Data
	  Manager to process and add the client to the database before the software
	  inventory information is added.
	
	12. Check log \SMS\Logs\SINVPROC.LOG for errors in step 11.
	
	MORE INFORMATION
	================
	
	"SMS Administrators Guide," Chapters 9, 10, Appendix D
	
	Additional query words: prodsms sinv32
	
	======================================================================
	Keywords          : kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
