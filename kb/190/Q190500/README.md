---
layout: page
title: "Q190500: XCON: Facilities Data Not Sent Out (by Exchange) with CALL ACC"
permalink: /kb/190/Q190500/
---

## Q190500: XCON: Facilities Data Not Sent Out (by Exchange) with CALL ACC

{% raw %}

	Article: Q190500
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Exchange Server computer may be unable to receive any X.25 incoming calls if
	there is call facilities data in the call packet.
	
	For example, an Eicon trace shows the following:
	
	  37    000-15:43:51.112 RX CALL IND                    <10 01 0B>
	   Data =  20
	        5A 11 69 00 02 03 13 11 10 06 42 07 07 43 04 04  Z.i.......B..C..
	        03 01 01 00                                      ....
	  38    000-15:43:51.702 TX CALL ACC                    <10 01 0F>
	   Data =  10
	        5A 11 69 00 02 03 13 11 10 00                    Z.i.......
	  39    000-15:43:51.703 RX CLEAR IND                   <10 01 13>
	   Data =   2
	        00 42                                            .B
	  40    000-15:43:51.993 TX CLEAR CNF                   <10 01 17>
	   Data =   0
	
	In this trace, the facilities are 420707430404.
	
	- The former digit 06 is the length of the facilities field.
	
	- The fields by themselves have to be split into Code-Byte 1-Byte 2.
	
	  The first field means packet size = 128 (42 is packet size code, so the first
	  digit is for remote DTE and the second is for local DTE. In this case, 7
	  indicates a packet size of 128 bytes).
	
	  The second field means window size = 4 (interpreted in the same way as packet
	  size).
	
	- In the CLEAR Packet, the code is 42 (facility parameter not allowed).
	
	CAUSE
	=====
	
	The incoming call is accepted by the Exchange Server computer because the
	facilities in the CALL packet match the facilities set in the X.400 stack, but
	the calling side drops the connection when it does not see the facilities in the
	CALL ACCEPT packet.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not use Call Facilities data.
	
	- Obtain the following fix.
	
	- Wait for the next Exchange Server service pack.
	
	To use the fix or the service pack, you must add a new registry value.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	       Value Name: Use incoming facilities on accept
	       Data Type:  REG_DWORD
	       Value:       1
	
	4. Quit Registry Editor.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: X25 X400 CUD/FAC
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
