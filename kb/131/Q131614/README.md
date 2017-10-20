---
layout: page
title: "Q131614: Propagating MIF Entry Forms (XNF files) to SMS Clients"
permalink: /kb/131/Q131614/
---

## Q131614: Propagating MIF Entry Forms (XNF files) to SMS Clients

{% raw %}

	Article: Q131614
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbInventory smssetup smsinv
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Appendix G of the Systems Management Server Administrators Guide discusses the
	customizing of computer inventory and the method to deliver the custom MIF forms
	to the Systems Management Server clients. This article outlines an alternate
	method to achieve this. The alternate method has the additional benefit of
	automatically downloading the new forms for all new clients when added to the
	Systems Management Server site.
	
	NOTE: If you run Systems Management Server Setup and add components or upgrade
	your site after following the procedure below, the files you modified
	(CLI_*.TXT) will be replaced with the original or newer versions. Therefore,
	this method is not supported by Microsoft for Systems Management Server versions
	1.0 through 1.2. If you decide to use the method below, Microsoft recommends
	that you make backup copies of the CLI_*.TXT files you modify.
	
	MORE INFORMATION
	================
	
	The steps described below are similar to the documented method in the Systems
	Management Server Administrators guide. The main difference is the modification
	of the CL_*.txt file (where * indicates the client operating system). The change
	specifies which files should be downloaded to the client computers. You should
	specify the new forms you have created in this file.
	
	The remainder of this article will reference the CLI_WIN.TXT for purposes of
	demonstration. If you are using other client operating systems with Systems
	Management Server, follow the steps below to modify the appropriate copylist
	file for each operating system platform.
	
	1. Create the new form.
	
	  Follow the steps outlined in Appendix G for Customizing the Computer Inventory
	  and Creating forms. Save the new forms in the
	  \SITE.SRV\MAINCFG.BOX\CLIENT.SRC\<platform> (where <platform> is
	  all platforms currently installed [for example, X86.BIN]). Forms saved in
	  this location will automatically be copied to the logon servers.
	
	  NOTE: All forms should be saved with the .XNF filename extension.
	
	2. Modify CL_WIN.TXT.
	
	  Modify the \SITE.SRV\MAINCFG.BOX\CLIENT.SRC\CL_WIN.TXT file to include the new
	  form(s) you have created. You can add the appropriate lines to this file in
	  one of several locations. However, Microsoft recommends you add the lines in
	  the STANDARD NETWORK FILES section. This file will automatically be
	  replicated to all logon servers.
	
	3. Create a package to update clients.
	
	  Write a batch file to connect to the \SMS_SHR share on a logon server and run
	  CLI_DOS.EXE /U from the appropriate platform subdirectory. This will prepare
	  the client to be updated at the next logon and the specified XNF files to be
	  downloaded to the client where they will be available to the MIF Entry
	  utility.
	
	  Sample batch file:
	
	       C:
	       net use t: \\smsserver\sms_shr
	       t:
	       cd x86.bin
	       cli_dos /u
	       c:
	       net use t: /d
	
	4. Distribute CLI_WIN.TXT to clients.
	
	  Deliver the above batch file to the client machines where the new forms should
	  be available. When the job is executed on the client, the above batch file
	  will prepare the client for update at the next logon. This file will also be
	  delivered to all new Systems Management Server clients and will result in the
	  automatic installation of the desired XNF forms.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbInventory smssetup smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
