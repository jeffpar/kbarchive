---
layout: page
title: "Q293836: XADM: Information Store Performance Degradation"
permalink: /kb/293/Q293836/
---

## Q293836: XADM: Information Store Performance Degradation

{% raw %}

	Article: Q293836
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The of the Exchange Server information store process may perform poorly, and one
	or more of the following error messages may be logged in the Microsoft Windows
	NT Event Viewer Application event log:
	
	  Event ID: 11
	  Source: MSExchange Private
	  Type: Error
	  Description:
	  Error 0xfffffbd3 occurred on message 1-EB1F8B1 during a background cleanup.
	
	  Event ID: 160
	  Source: ESE97
	  Type: Warning
	  Description:
	  MSExchangeIS (359) Background clean-up skipped pages. Database may benefit
	  from online or offline defragmentation
	
	If you create a User.dmp file of the Store.exe process when the Information Store
	service is in this state, the User.dmp file is similar to the following stack
	frames:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	  315feef4 6febd4a8 00000001 00000000 fffffa01 ESE!FCB__ErrAlloc_+0x3a4
	  315fef0c 6fe9d983 0027e1bb 315fef30 00000001 ESE!FCB__ErrCreate+0x16
	  315fef40 6fe9159d 00000001 315fef68 00000000 ESE!ErrBTIOpen+0x4d
	  315fef50 6fe9e703 00000001 315fef68 00000000 ESE!ErrBTOpen+0x14
	  315fef60 6febf962 00000001 315fef88 315ff0f8 ESE!ErrDIROpen+0x11
	  315ff030 6febe46a 006832d8 162eef60 1497fc70 ESE!ErrCATIInitIndexFCBs+0x4a6
	  315ff0d4 6fe9e581 006832d8 00000000 315ff1fc ESE!ErrCATInitFCB+0x2c4
	  315ff120 78021365 315ff138 0065d33e 315ff174 ESE!ErrFILEOpenTable+0x3f8
	  315ff140 6fe9e171 315ff160 00000000 00060000 MSVCRT!Ordinal206+0x195f1
	  315ff160 6fe9e03f 315ff1fc 315ff200 00060000 ESE!ErrIsamOpenTable+0xa5
	  00000001 00000000 00000000 00000000 00000000 ESE!JetOpenTable+0x140
	
	This thread scans the (last recently used list) LRU and continues to do so over
	and over again, while holding on to a critical section that other Extensible
	Storage Engine (ESE) threads need, as shown in the following stack:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	  396ef888 77f6ce61 000012bc 00000000 00000000 ntdll!NtWaitForSingleObject+0xb
	  396ef8fc 77f67586 6ff40b18 6fe9cf7d 6ff40b18 ntdll!RtlpWaitForCriticalSection+0xaa
	  396ef904 6fe9cf7d 6ff40b18 00000001 17074a60 ntdll!RtlEnterCriticalSection+0x46
	  396ef928 6fe91532 17074a60 6fe9ce5a 00000000 ESE!FCB__Unlink+0x10c
	  396ef930 6fe9ce5a 00000000 17074a60 396ef958 ESE!FCBUnlink+0x9
	  396ef944 6fe9d1ab 16629e40 17074a60 17074a60 ESE!BTClose+0x109
	  396ef958 6fe9d489 00665154 00000096 396ef9cc ESE!DIRClose+0x89
	  396ef970 6fe9ec90 260ca320 6fe9ecd5 00665154 ESE!ErrFILECloseTable_245+0xb
	  396ef978 6fe9ecd5 00665154 260ca320 00000000 ESE!ErrIsamCloseTable+0x3c
	  00665164 00656c62 4241544a 5341425f 453a3a45 ESE!JetCloseTable+0x43
	  00665238 00644967 4241544a 5341425f 453a3a45 store!HrAppendTextToCompressedRTF+0x262
	
	CAUSE
	=====
	
	This problem can occur if the information store sets the MAX OPEN TABLES and
	PREFERRED MAX OPEN TABLES values (which regulate the number of Open Tables in
	the JET database) incorrectly when the information store starts. The calculation
	to set these values is dependent upon many things and is very complex. The
	PREFERRED MAX OPEN TABLES value is always set lower than the MAX OPEN TABLES
	value. If the information store reaches the value set by the PREFERRED MAX OPEN
	TABLES value, JET starts a scan to try to find resources that can be used to
	comply with more requests for open tables. This scan repeats aggressively, which
	results in the degradation of the information store process.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.89 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	
	To resolve this problem in Exchange Server 5.5, the PREFERRED MAX OPEN TABLES
	value must be set equal to the MAX OPEN TABLES value when the Information Store
	service starts. To do this, the MATCH OPEN MAX TABLES registry key is added in
	this fix. If this key is present and set to any value other than zero, the
	information store automatically sets the PREFERRED MAX OPEN TABLES value equal
	to the MAX OPEN TABLES value.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To add the registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate, and then click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: MATCH MAX OPEN TABLES
	  Data type: REG_DWORD
	  Radix: Hexadecimal
	  Value data: 0x1
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
