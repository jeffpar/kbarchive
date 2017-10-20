---
layout: page
title: "Q286349: Print Server Application Exception in Function TRNSDT!ibm_pc"
permalink: /kb/286/Q286349/
---

## Q286349: Print Server Application Exception in Function TRNSDT!ibm_pc

{% raw %}

	Article: Q286349
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Print service (Nnaprint.exe) that is included with SNA Server and Host
	Integration Server 2000 may experience an application exception in function
	TRNSDT!ibm_pc when it is processing multiple print jobs. If DRWTSN32.exe is
	configured as the system's default debugger and it is configured to create a
	User.dmp, the stack dump shown in the User.dmp will be similar to the
	following:
	
	> KS
	0cb7fab0  630023b8  0x00000000
	0cb7faf0  630017b2  TRNSDT!ibm_pc+0x3d8
	0cb7fba4  60d96fc9  TRNSDT!TrnsDt+0x632
	00000037  00000000  PPD3270!cnvprtbuf+0x162 [ s3dsdbj.c @ 3065 ]
	
	CAUSE
	=====
	
	The application exception described in this article is caused by problems
	loading and unloading TRNSDT.dll, which is used for National Language Support
	(NLS) in SNA Server and Host Integration Server 2000. There are conditions under
	which a print server thread could unload this DLL while another print server
	thread is still using it. This can result in a NULL pointer being passed to the
	failing function, resulting in an application exception.
	
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Ppd3270.dll | 01/25/2001 | 02:11PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Ppd3270.dll | 01/25/2001 | 02:11PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 (all SP), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, and Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	In the documented instance of this problem, the Drwtsn32.log did not contain the
	FAULT, so it was not useful in determining the failing function. However, the
	Drwtsn32.log may contain more information on other systems that experience this
	failure. In these cases, the failing stack will look similar to the User.dmp
	stack shown here. In addition, the Drwtsn32.log file will contain information
	similar to the following when Snaprint.exe traps:
	
	Application exception occurred:
	       App: obj\i386\snaprint.exe (pid=188)
	       When:  11/21/2000 @ 10:37:16.503
	       Exception number:  c0000005 (access violation)
	
	NOTE: There may be application exceptions in Snaprint.exe that are caused by
	problems other then the one described here.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
