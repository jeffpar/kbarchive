---
layout: page
title: "Q150952: One-Time Install Message When No Configuration Command Line"
permalink: kb/150/Q150952/
---

## Q150952: One-Time Install Message When No Configuration Command Line

	Article: Q150952
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to execute a shared application with a Registry name such as
	"name1+name2," you may receive the following message in the Program Group
	Control Start dialog box:
	
	  A one-time installation is required. It might take several minutes and it
	  might require that Windows be restarted. Do you want to configure application
	  now?
	
	After you select "yes," the following message is displayed:
	
	  Could not execute the configuration program for
	  SMS\APPLICATIONS\<Application name>
	
	MORE INFORMATION
	================
	
	Normally, if a configuration script is specified, the one-time installation
	message is displayed the first time a shared application is executed. However,
	the message and subsequent error will occur when there is no configuration
	command line specified if the Registry name specified in the Sharing Properties
	of the package is in the form "name1+name2," as shown in the illustration on p.
	297 of Chapter 10 in the SMS System Guide.
	
	The "+" separator in the Registry name implies that there is a family of
	applications. When APPSTART sees that type of Registry name, it splits it into
	two parts, name1 and name2. Name1 is regarded as the primary name and
	name1+name2 as the compound name. APPSTART then attempts to find the following
	Registry key:
	
	  SMS\APPLICATIONS\name1\Configuration\Status
	
	That key would exist in a family of applications, such as MSOffice, but in this
	case does not exist. APPSTART, failing to find the key, marks the corresponding
	key for the compound name
	
	  SMS\APPLICATIONS\name1+name2\Configuration\Status
	
	as CONFIGURE instead of SUCCESS. Normally a Configuration Status of CONFIGURE
	would cause the Configuration Command Line (ConfigureScript) to be executed.
	Since there is no Configuration Script specified, APPSTART errors.
	
	Unless the shared application is part of a family of applications or has a
	configuration script specified, the Registry name in the Program Item Properties
	of the Sharing Properties of a package should not contain a "+" sign.
	
	Additional query words: err msg pgc.log regname
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
