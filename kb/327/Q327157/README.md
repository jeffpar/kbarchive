---
layout: page
title: "Q327157: 3270 Emulator Traps in the SNAGetUserRecord Function"
permalink: /kb/327/Q327157/
---

## Q327157: 3270 Emulator Traps in the SNAGetUserRecord Function

{% raw %}

	Article: Q327157
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna400sp4 Kbhostintegserv2000
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are configuring a 3270 emulator, such as the Microsoft SNA Server 3270
	emulator or Attachmate's Extra Personal Client, an access violation may occur in
	the SNADMOD SNAGetUserRecord() function.
	
	A second symptom, if an access violation does not occur, is that the list of 3270
	logical units (LUs) that is shown in the configuration may have incorrect data
	at the end of the list, and the list may be incomplete or inaccurate.
	
	If Drwtsn32.exe is configured as the default debugger, and if you are using the
	3270 Client that is included with SNA Server or Host Integration Server 2000, a
	Drwtsn32.log similar to the following is generated:
	
	Application exception occurred:
	       App: obj\i386\win3270.exe (pid=976)
	       When: 7/24/2002 @ 13:36:28.086
	       Exception number: c0000005 (access violation)
	
	[...]
	
	function: SNAGetUserRecord
	       67205d5f 668910           mov     [eax],dx                   ds:00000f63=????
	       67205d62 8b3550ad2067                                    ds:6720ad50=0009ee70
	                                 mov     esi,[giDmodInitCount+0x4 (6720ad50)]
	       67205d68 33c0             xor     eax,eax
	       67205d6a 668b85e0000000   mov     ax,[ebp+0xe0]              ss:0009ef58=00f7
	       67205d71 8b16             mov     edx,[esi]              ds:0009f000=????????
	       67205d73 8d0440           lea     eax,[eax+eax*2]        ds:00000f63=????????
	       67205d76 8d0c80           lea     ecx,[eax+eax*4]        ds:00000f63=????????
	       67205d79 8d8c11e2000000   lea     ecx,[ecx+edx+0xe2]     ds:000000ea=????????
	       67205d80 8bc1             mov     eax,ecx
	       67205d82 c1e902           shr     ecx,0x2
	FAULT ->67205d85 f3a5            rep  movsd ds:0009f000=???????? es:0008eca0=00000000
	       67205d87 8bc8             mov     ecx,eax
	       67205d89 33c0             xor     eax,eax
	       67205d8b 83e103           and     ecx,0x3
	       67205d8e f3a4             rep     movsb         ds:0009f000=?? es:0008eca0=00
	       67205d90 668b85e0000000   mov     ax,[ebp+0xe0]              ss:0009ef58=00f7
	       67205d97 8b0b             mov     ecx,[ebx]              ds:0008eb10=00000008
	       67205d99 8b742414         mov     esi,[esp+0x14]         ss:00aecb43=????????
	       67205d9d 8d0440           lea     eax,[eax+eax*2]        ds:00000f63=????????
	       67205da0 85f6             test    esi,esi
	       67205da2 8d1481           lea     edx,[ecx+eax*4]        ds:00000f63=????????
	       67205da5 8d8410e2000000   lea     eax,[eax+edx+0xe2]     ds:000000ea=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0006F738 62A02500 0008EB10 00072BC3 62A0491C 67200000 snadmod!SNAGetUserRecord  (FPO: [EBP 0x00072BC3] [3,111,4])
	0006F754 62A0240D 67200000 00072BC3 62A0491C 002900C4 cfgs3270!ReadCSConfig  (FPO: [3,0,3])
	0006F8E0 62A01A8F 00000000 00060001 62BA44BB 002900C4 cfgs3270!GetCSConfig  (FPO: [EBP 0x002900C4] [1,91,4])
	0006F8EC 62BA44BB 002900C4 00000003 01006428 0006FC38 cfgs3270!Cfg3270  (FPO: [4,0,1])
	0006FC14 010051C8 002900C4 00000001 0006FC38 01006428 sna3270!InitializeSNA  (FPO: [EBP 0x00000001] [4,193,4])
	00000001 00000000 00000000 00000000 00000000 00000000 win3270!CEmulate3270::OnConfigEmulator (FPO: Non-FPO [2,39,3])
	
	CAUSE
	=====
	
	This is an SNA Server-side issue, not an emulator issue. This problem occurs
	only when the following two conditions exist:
	
	- The User Workstation Secured option is selected for the 3270 LUs.
	
	- 3270 LUs are assigned to both a User/Group record and a Workstation record.
	
	Under these conditions, the SnaBase service on the SNA Server or Host Integration
	Server 2000 system returns a user record that incorrectly indicates that the
	user has access to more 3270 LUs than the user actually has access to. The
	result is that the SNA Server or Host Integration Server 2000 Client may read
	beyond the memory buffer that was allocated to store the returned user record.
	This results in a list of 3270 LUs that contains invalid characters (as
	mentioned in the "Symptoms" section).
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version      Size    File name
	  --------------------------------------------------
	  01-Aug-2002  14:32  4.0.0.606   228,656  Snabase.exe
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	
	WORKAROUND
	==========
	
	Do not use workstation assignments in conjunction with user assignments.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the option to secure a user workstation, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q185707 Allow Assignment of an LU to a User and Workstation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
