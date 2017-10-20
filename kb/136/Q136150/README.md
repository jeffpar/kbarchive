---
layout: page
title: "Q136150: Srv Event 2000 with Status Code C000023A"
permalink: /kb/136/Q136150/
---

## Q136150: Srv Event 2000 with Status Code C000023A

{% raw %}

	Article: Q136150
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	The following error appears in your system log:
	
	  Event ID: 2000
	
	  Description:
	  The server's call to a system service failed unexpectedly.
	
	  Data: Words
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c000023a 00000000 00000000
	  0020: 00000000 00000000 13830bbe
	
	NOTE: There are many causes for Srv 2000 error messages. The data segment
	must match the above exactly (c0000023a and bbe) for the information in
	this article to apply.
	
	CAUSE
	=====
	
	The size of request buffers on your computer running Windows NT Server is too
	small.
	
	If the request buffer size is too small, the Windows NT server discards the
	command contained in the server message block (SMB) and logs an error in the
	system log. The client determines that the server has not satisfied its request
	and, therefore, resends the request. If the server has enough buffer resources
	it processes the command without logging an error in the system log.
	
	RESOLUTION
	==========
	
	Increase the size of request buffers on your computer running Windows NT.
	
	NOTE: Larger request buffers require more memory, but improve performance.
	
	To increase the size of request buffers, you need to modify the SizReqBuf entry
	in the registry:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run REGEDT32.EXE and locate the following registry subkey under the
	  HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	2. From the Edit menu, choose Add Value and type SizReqBuf in the Value Name
	  field.
	
	3. In the Data Type field, select REG_DWORD and choose OK.
	
	4. In the Data Field, type 4410. Select the Hex option and choose OK.
	
	  NOTE: SizReqBuf has the following range and default setting:
	  Range: 512 to 65535 bytes (decimal)
	  Default: 4356 (decimal)
	
	5. Quit REGEDT32.EXE.
	
	6. Shut down Windows NT and turn off your computer.
	
	7. Restart your computer and Windows NT.
	
	The server should now have enough resources to process the number of SMB commands
	that it receives. If the errors continue, increase the value to a maximum of
	0xffff (hex) or 65535 (decimal).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
