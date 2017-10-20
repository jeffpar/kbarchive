---
layout: page
title: "Q216123: Print Jobs May Not Finish Printing if Host Sends SHUTD"
permalink: /kb/216/Q216123/
---

## Q216123: Print Jobs May Not Finish Printing if Host Sends SHUTD

{% raw %}

	Article: Q216123
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Host print jobs printed through SNA Server's Host Print service may not print in
	their entirety if the host issues a SHUTD (Shutdown) command after the print
	data has been sent to the print server. For example, a print job that contains
	three pages of data may result in two pages of actual output when this problem
	occurs.
	
	CAUSE
	=====
	
	SNA Server's Host Print service immediately issues a SHUTC (Shutdown Complete)
	command when it receives a SHUTD command from the host instead of waiting until
	the print job is complete. After the host receives the SHUTC command from an
	application (that is, the print server), any further Request Units (RUs) that
	are queued for that particular session are not sent. This problem occurs when
	there are additional RUs waiting to be sent to the print server when the SHUTC
	is received by the host. The missing print output is contained in these RUs.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2. This problem was first
	corrected in SNA Server version 3.0 Service Pack 4 and SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	SNA messages can be sent with two different priorities: normal and expedited.
	Expedited messages take precedence over other messages waiting to be sent on the
	same session. SHUTD and SHUTC commands are sent as expedited messages. Because
	SHUTD commands are sent as expedited messages, it is possible for these to be
	sent prior to normal messages already queued for the same session. The problem
	described in this article occurs when a SHUTD message is sent to SNA Server's
	Host Print service before some of the preceding normal messages are sent. The
	following is an example of how the host print data was intended to be sent and
	processed:
	
	Host                           SNA Server                 Print Server
	----                           ----------                 ------------
	Data (Begin Bracket)  ->
	                              Data (Begin Bracket)  ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	Data                  ->
	                              Data                  ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	Data                  ->
	                              Data                  ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	Data (End Bracket)    ->
	                              Data (End Bracket)    ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	SHUTD                 ->
	                              SHUTD                 ->
	                     <-       SHUTD +RSP
	                                                    <-   SHUTC
	                     <-       SHUTC
	SHUTC +RSP            ->
	UNBIND                ->
	
	In this case, the SHUTC is sent after the last print data as noted by the End
	Bracket (EB) indicator. Therefore, the entire print job completes.
	
	The following is a sample sequence that results in only part of the print data
	actually being printed:
	
	Host                           SNA Server                 Print Server
	----                           ----------                 ------------
	Data (Begin Bracket)  ->
	                              Data (Begin Bracket)  ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	Data                  ->
	                              Data                  ->
	                                                    <-   Acknowledgement
	                     <-       +RSP
	SHUTD                 ->
	                              SHUTD                 ->
	                     <-       SHUTD +RSP
	                                                    <-   SHUTC
	                     <-       SHUTC
	SHUTC +RSP            ->
	UNBIND                ->
	
	In this case, the last two data messages shown in the first example above are not
	shown as they never reach the SNA Server. The data messages are not shown
	because the SHUTD/SHUTC sequence occurred before these normal data messages
	could be sent.
	
	If the device (that is, IBM 3745 or Cisco Routers) that is responsible for
	sending the actual host messages to the SNA Server has some normal and expedited
	messages for the same host session, it is possible that the expedited messages
	will be sent prior to normal flow messages.
	
	After applying the update, SNA Server's Host Print service can be configured so
	that it will not issue a SHUTC command in response to a SHUTD command until an
	RU with an End Bracket indicator is received. This prevents the print server
	from issuing the SHUTC command immediately on the receipt of the SHUTD command,
	which caused the problem described here.
	
	The following Registry entry has to be configured to allow the print server to
	delay the SHUTC command processing.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters
	 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	     Value Name: SHUTCafterEB
	     Data Type:  REG_SZ
	     Value:      YES
	 
	
	4. Quit Registry Editor.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
