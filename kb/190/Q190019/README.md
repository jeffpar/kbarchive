---
layout: page
title: "Q190019: XFOR: Reinstalling Microsoft Exchange Connectivity Software"
permalink: /kb/190/Q190019/
---

## Q190019: XFOR: Reinstalling Microsoft Exchange Connectivity Software

{% raw %}

	Article: Q190019
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to uninstall and reinstall the Exchange Server 5.5
	connectivity software (Notes, SNADS, OV/VM connectors) to keep the original
	configuration. You must back up some files and record the configuration
	parameters in some property pages.
	
	MORE INFORMATION
	================
	
	1. Back up the following files. The paths are given relative to the
	  \Exchsrvr\Connect\Exchconn directory.
	
	  *.csm
	  *.msg
	  *.ini
	  Lsntscfg.nsf
	  Dxamex\*.*
	  Dxanotes\*.*
	  Logs\*.*
	  q\*.* (and subdirectories)
	  Tables\*.*
	
	  You need to stop the Microsoft Exchange Connectivity Controller service to
	  back up some of these files. Stopping the Connectivity Controller also stops
	  the Notes, SNADS, and OV/VM connectors.
	
	2. For each connector, record the information stored on the General and Address
	  Space tabs. You will use this information to reconfigure these property pages
	  after the reinstallation.
	
	3. For the Notes connector, record the information found on the General, Address
	  Space, Import Container, and Export Containers tabs.
	
	4. Start the Exchange Server Administrator program, click the Configuration
	  container, double-click Site Addressing in the right- hand pane, and then
	  click the Site Addressing tab. Record the proxy rules for Notes, SNADS, and
	  PROFS proxies.
	
	5. Note the Windows NT service account that the Microsoft Exchange Server
	  Connectivity Controller service is running under. This Windows NT service
	  account should be the same as the Exchange Server service account. You need
	  to know the service account and password when you reinstall the software.
	
	6. Stop the Connectivity Controller to uninstall the Exchange Server 5.5
	  connectivity software. After you back up these files and record the
	  information from the property pages, uninstall the Exchange Server 5.5
	  connectivity software by running Setup from the Programs\Microsoft Exchange
	  Connectivity program group.
	
	7. Click "Uninstall Microsoft Exchange Connectivity Software", and then click
	  Next. When the Uninstall wizard asks whether to remove e-mail addressing
	  components, click No.
	
	8. After the uninstallation is finished, obtain the Exchange Server 5.5 Standard
	  Edition compact disc (or the Enterprise Edition compact disc, if the SNADS or
	  OV/VM connectors were installed), and let the AutoRun procedure on the
	  compact disc begin. Click Setup Server and Components. Then click Connector
	  for Lotus Notes (or any of the three, if you are using the Enterprise
	  Edition. You have to manually select the components you want in the next
	  step.).
	
	9. Click "Microsoft Exchange Connectivity Services", and then click Next.
	
	10. Select the connectors that you had installed, including the E-Mail
	  Addressing Component for each one previously installed. Enter the service
	  account and password you recorded in step 5.
	
	11. For the E-Mail Addressing dialogue box, consult the proxy rule you recorded
	  earlier, and type the Foreign Domain Name (Notes Connector), VM Node ID
	  (OV/VM Connector), and Distribution Group Name (SNADS Connector). Click No
	  in each step to indicate that you do not want the addresses to be generated.
	
	12. After the software is installed, go back into the Exchange Server
	  Administrator program Configuration container, double-click Site Addressing
	  in the right-hand pane, and then click the Site Addressing tab. Verify that
	  the Notes, SNADS, and OV/VM proxy rules are the same as you recorded
	  earlier. If not, change the rule here, and regenerate the addresses. In
	  terms of the Notes connector, you do NOT have to redo the Notes
	  Configuration Utility.
	
	13. Perform "phase II setup" by starting the Setup program from the
	  Programs\Microsoft Exchange Connectivity program group. Click Configure
	  Microsoft Exchange Connector. Go through each of the Notes, SNADS, and OV/VM
	  connectors (depending on which connectors you had installed). When the
	  dialogue box appears warning that the Notes Configuration Utility has not
	  been run, click Yes to accept defaults.
	
	  Note that after Exchange Server 5.5 Service Pack 1, the Setup program for
	  these connectors no longer requires a "phase II setup."
	
	14. Restore (file copy) all of the files that were backed up in step 1.
	
	15. Reconfigure the Notes Connector property pages according to information
	  recorded earlier in step 2. For the SNADS and OV/VM connectors, view the
	  property page. All information should be intact.
	
	16. Start the Microsoft Exchange Server Connectivity Controller service and the
	  services for each connector, and verify that messages are flowing.
	
	Additional query words: OV/VM, SNADS,
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
