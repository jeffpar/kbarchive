---
layout: page
title: "Q199747: SMS: Registry Errors on Software Metering Clients"
permalink: /kb/199/Q199747/
---

## Q199747: SMS: Registry Errors on Software Metering Clients

{% raw %}

	Article: Q199747
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Clients that have the Systems Management Server version 2.0 client installed may
	receive an error in the LICCLI.LOG file stating:
	
	  Problem with the registry (error 2). SWM server probably not configured
	  properly (LicenseServers key missing?)
	
	Generally this means that the client agent was installed on the client computer
	before a Software Metering server was setup. Installing Software Metering during
	the site server installation installs the components on the site server so they
	can be installed on a computer. It does not configure the site server as a
	Software Metering server by default.
	
	MORE INFORMATION
	================
	
	To resolve this issue, you must either add the Software Metering server site
	system role to an existing site system (this could be the site server), or add a
	new site system with the Software Metering server role. Once that has been
	completed and installed successfully, the client agent should be enabled, and
	installed on the client.
	
	To enable the Software Metering Client Agent, navigate to:
	
	Systems Management Server + Site Database (site code - site name)
	
	  + Site Hierarchy
	
	    + <site code - site name>
	      + Site Settings
	        + Client Agents
	          + Software Metering Client Agent
	
	Double-click on the Software Metering agent to open it. First you will need to
	place a check in the checkbox labeled "Enable software metering on clients."
	Make any other configuration changes that you want, and then click OK.
	
	To verify that the client agent is really ready to be installed and used on the
	client, check the LICMTR.CFG file on the CAP in the CLICOMP.BOX directory. If
	there is a listing for License Servers that lists the software metering server
	you enabled, then it is fine to install the agent on the client. If it is not
	listed, then the agent can be installed, but won't run successfully.
	
	The Registry entry on the client error references is from:
	
	HKLM\Software\Microsoft\SMS\Client\Sites\sitecode\Client Components\License
	Metering.
	
	You can also look there, and if the client is ready, there will be an entry
	listed "LicenseServers." If not, the servers have not been added, and the agent
	won't run.
	
	If that's the case, get the servers installed, the LICMTR.CFG file updated, and
	then restart the client to update the local configuration.
	
	Shown below is an example of the LICMTR.CFG file:
	
	[Component Configuration]
	
	    LastUpdate=29228490, 61154480
	    Name=LICENSE METERING
	    KeyFlags=0
	      (REG_DWORD) ContinuousOffline=1
	      (REG_DWORD) Flags=0
	      (REG_DWORD) GoOnLineInt=900
	      (REG_DWORD) TriesBeforeOffline=1
	      (REG_SZ) LicenseServers=<site system server name>
	
	[<site system server name>]
	
	      (REG_SZ Name=<site system server name>
	      (REG_DWORD) Platform=3
	      (REG_SZ) UncDbPath=\\<site system server name>\LicMtr
	
	[IDENT]
	
	    TYPE=Base Config File Type
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
