---
layout: page
title: "Q149942: Automating a SLIP Connection with Remote Access Services"
permalink: /kb/149/Q149942/
---

## Q149942: Automating a SLIP Connection with Remote Access Services

{% raw %}

	Article: Q149942
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To fully automate the process of logging on to a SLIP server using a Windows NT
	Remote Access Service (RAS) client, you must use Rasdial.exe to dial the SLIP
	server.
	
	MORE INFORMATION
	================
	
	The Windows NT RAS PhoneBook application (Rasphone.exe) does not include a
	facility to fully automate logging on to a SLIP server. You can use the
	Switch.inf file to automate all parts of the logon process except the receipt of
	the IP address. In the Terminal window, RAS prompts you to manually supply the
	IP address; there is a field for it in the lower right corner.
	
	To fully automate the connection to the SLIP server, you can use the Rasdial
	command-line utility as follows:
	
	1. Use the RAS PhoneBook application to create an entry for your SLIP server.
	  Note the entry name you assign to this new entry.
	
	2. Click Network and make sure SLIP is selected.
	
	3. Click Security. In the After Dialing field, select the name of the Switch.inf
	  script you created to automate the process of logging on to your SLIP
	  server.
	
	  For additional information on automating a RAS logon using the Switch.inf
	  file, refer to the following Microsoft Knowledge Base article:
	
	  Q125975Automating Remote RAS Logons Using SWITCH.INF Scripts
	
	4. Connect to the SLIP server using the RAS PhoneBook entry you have just
	  created. You must enter the IP address in the Terminal window; however, you
	  will not need to do this again. RAS records the address you enter in the
	  Rasphone.pbk file, under the SlipIpAddress parameter.
	
	5. For future connections to the SLIP server, run the following command:
	
	  Rasdial <entry name>
	
	  where <entry name> is the entry name you assigned in step 1.
	
	  Rasdial does not prompt you to enter the IP address in the Terminal window.
	  Rasdial uses the IP address included in the section of Rasphone.pbk for your
	  SLIP entry.
	
	NOTE: This procedure only works if you are assigned the same IP address by the
	SLIP server each time you dial in. If the SLIP server does not assign you the
	same IP address each time, you must use the RAS PhoneBook application, which
	enables you to enter whatever IP address the SLIP server assigns you.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
