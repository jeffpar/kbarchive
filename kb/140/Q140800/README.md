---
layout: page
title: "Q140800: TN3270E Print Job Hangs in Print Manager"
permalink: /kb/140/Q140800/
---

## Q140800: TN3270E Print Job Hangs in Print Manager

{% raw %}

	Article: Q140800
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A TN3270E printer session hangs if the Host sends a BIND RU that specifies an
	Inbound Maximum RU size of 0 (indicating that no maximum RU size applies on the
	session to the Host). This causes the print job to remain in 'Spooling..." state
	in the Windows NT Print Manager until the Printer Session is disconnected.
	
	This symptom occurs sporadically.
	
	CAUSE
	=====
	
	There are two causes to this problem:
	
	1. The TN3270 Server incorrectly interprets 0 as the maximum RU size which
	  prevents it from sending any data to the host. When the host establishes a
	  session and specifies the maximum inbound RU size as "no maximum", the
	  TN3270E Server treats this as an RU size of zero bytes. This has the effect
	  that it ignores all the data it receives from a TN3270 or TN3270E client,
	  apart from the 5-byte header in the case of TN3270E.
	
	2. A TN3270E client may also misinterpret this byte and would then be unable to
	  send any response to the TN3270 Server. The WRQ emulator is one such
	  emulator.
	
	RESOLUTION
	==========
	
	There is a fix for cause number one and two:
	
	1. The fix for cause number 1 ensures that the TN3270 sends inbound data. The
	  data is sent in Request Units (RUs) up to the "Default Inbound RU Size"
	  specified in the "Options" dialog of TN3270 Admin.
	
	2. To work around the second cause, the client problem, the TN3270 Server has a
	  registry entry that allows a 0 RU size in the BIND image transmitted to the
	  client to be overwritten by the "Default Inbound RU Size" specified in the
	  "Options" dialog of TN3270 Admin. You can find the registry entry under the
	  subtree HKEY_LOCAL_MACHINE under the subkey:
	
	  CurrentControlSet\Services\TN3270\Parameters
	
	  The registry value is as follows:
	
	  Value Name: ReplaceRUSize
	  Data Type: REG_EXPAND_SZ
	
	  If this entry is set to "ON" then the value for the inbound RU size in the
	  BIND Image sent to the TN3270E client is set to the default inbound RU size
	  as configured for the TN3270E Server, if the host has specified no maximum.
	
	  Set this registry entry only if you experience this problem.
	
	Microsoft has updated the following files to correct this problem:
	
	- <TN3270Root>\TN3SERVR.EXE
	
	- <TN3270Root>\TN3SERVR.DBG
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
