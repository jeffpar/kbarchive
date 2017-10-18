---
layout: page
title: "Q259430: MS RADIUS Logging Format Changes After Applying the IAS SP6a Fix"
permalink: kb/259/Q259430/
---

## Q259430: MS RADIUS Logging Format Changes After Applying the IAS SP6a Fix

	Article: Q259430
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the Microsoft Internet Authentication Service (IAS) Service Pack
	6a (SP6a) rollup fix, the Remote Authentication Dial-In User Service (RADIUS)
	accounting log file format changes. If you have written a third-party utility to
	parse this information into a database, this functionality may stop working
	after you apply IAS SP6a.
	
	For additional information about the IAS SP6a rollup fix, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q239864 Availability of Internet Authentication Service SP6 Rollup Hotfix
	
	CAUSE
	=====
	
	This issue occurs because the RADIUS accounting log format was changed in the
	IAS SP6a rollup fix at the request of customers so that the format is more
	compatible with existing RADIUS accounting programs. Before you apply the IAS
	SP6a rollup fix, the Logfile code does not print binary attributes (RADIUS Octet
	String). Binary attributes are always printed as hexadecimal equivalent strings,
	for example, 0x.
	
	Before you apply the fix, the Logfile code prints attributes with values of ",".
	This format breaks the parsing logic that is used by many customers. After you
	apply the IAS SP6a rollup fix, any attribute value which contains a ","
	delimiter is printed as hexadecimal equivalent strings, for example, 0x.
	Therefore, the parsing logic has to be changed to detect hexadecimal strings 0x,
	and then converted back to the corresponding values.
	
	The following text is an example of the RADIUS accounting log before the IAS SP6a
	rollup fix is applied:
	
	  212.8.182.165,guy1,02/26/2000,00:00:03,AuthSrv,BTBNTSYS5,40,2,32,Ant01V007,26,,5,16610,61,2,30,71622020,31,71520493,41,0,8,0.0.0.0,1,
	
	  guy1,7,1,42,445,43,106,44,0000811F,46,63,47,0,48,0,45,1,195,197,198,64,2,65,1,67,212.8.182.229
	
	  212.8.182.165,02/26/2000,00:00:03,AuthSrv,BTBNTSYS5,40,13,32,Ant01V007,41,0,5,16610,44,0000811F,49,-2013265905,61,2,64,2,65,1,66,212.8.182.165,67,212.8.182.229,68,Local
	  CLID=0x100b, Remote CLID=0x0d33, MID=0x82b2
	
	The following text is an example of how the log files are changed after the IAS
	SP6a rollup fix is applied:
	
	  212.8.182.163,guy2,04/06/2000,00:00:07,AuthSrv,BTBNTSYS5,40,2,32,Bru01V013,26,0x00000A4D03163031303030303030303936424542423243424244,5,16588,61,0,30,24902020,31,0000000000000000,41,0,8,0.0.0.0,1,
	
	  guy2,7,1,42,122547,43,422240,44,0001DD3D,46,637,47,0,48,0,45,1,195,3,197,24000,255,24000,198,22,64,2,65,1,67,212.8.182.230
	
	  212.8.182.165,04/06/2000,00:00:07,AuthSrv,BTBNTSYS5,40,13,32,Ant01V007,41,0,5,1185,44,0002B875,49,-2013265905,61,0,64,2,65,1,66,212.8.182.165,67,212.8.182.229,68,0x4C6F63616C20434C49443D3078323138662C2052656D6F746520434C49443D3078326262312C204D49443D307866303331
	
	The following text shows the differences between the two logs:
	
	  "Ant01V007.... 212.182.229.68, 68,Local CLID=0x100b
	
	  Ant01V007... 212.182.229.68
	  0x4C6F63616C20434C49443D3078323138662C2052656D6F746520434C49443D3078326262312C204D49443D307866303331
	
	MORE INFORMATION
	================
	
	RADIUS accounting log content is not controlled by the RADIUS server; it is
	controlled by the Network Access Server (NAS) device that acts as a RADIUS
	client and forwards the accounting request to the RADIUS server by using an
	accounting request packet
	
	For more information about the content of RADIUS accounting packets, refer to the
	NAS hardware vendor documentation, or refer to Request for Comments (RFC) 139
	that is located at the following Internet Engineering Task Force Web site
	
	  http://www.ietf.org (http://www.ietf.org)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
