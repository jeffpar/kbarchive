---
layout: page
title: "Q86153: PROFS: Why 3270 File Transfer Should Be Tested First"
permalink: /kb/086/Q86153/
---

## Q86153: PROFS: Why 3270 File Transfer Should Be Tested First

{% raw %}

	Article: Q86153
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The local-area network (LAN) side of the Microsoft Mail gateway (HostDisp) uses
	3270 file transfer programs to exchange mail with the VM side (Host Access).
	Therefore, this must be tested and working before running the gateway programs.
	
	On the host, the IBM file transfer program (IND$FILE) will work with the 3270
	emulator's SEND and RECEIVE programs to upload and download files. To test this
	program, do the following:
	
	1. Using the Gateway PC, log on to the gateway VM ID. After you see the
	  PROFS:IDLE or PROFS:READY prompt, type HX to return to CMS. Hot key back to
	  MS-DOS and type:
	
	  "SEND C:\AUTOEXEC.BAT AUTOEXEC BAT F (ASCII CRLF RECFM V LRECL 256" (without
	  the quotation marks)
	
	  This command will transfer the AUTOEXEC.BAT file from the MS Mail Gateway PC
	  to the gateway VM ID's 193 F disk.
	
	2. Download the same file by using the following command:
	
	  "RECEIVE AUTOEXEC BAT F C:\AUTOEXEC.BAT (ASCII CRLF" (without the quotation
	  marks)
	
	The gateway does not function properly until these two tests are successfully
	executed.
	
	
	Additional query words: 3.20 pcmail profsvm SEND RECEIVE IND$FILE
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
