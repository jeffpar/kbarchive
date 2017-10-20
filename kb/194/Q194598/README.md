---
layout: page
title: "Q194598: Print Server Overrides Font ID Parameter When Using HPT"
permalink: /kb/194/Q194598/
---

## Q194598: Print Server Overrides Font ID Parameter When Using HPT

{% raw %}

	Article: Q194598
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Host Print Transform (HPT) configuration in SNA Server 4.0 and 4.0 Service
	Pack 1 (SP1) no longer includes the option to specify the font ID to be used by
	the AS/400 print session. Even though the Font ID parameter can be configured
	manually on the AS/400 for the AS/400 print devices being used, this parameter
	is overridden by SNA Server's print server each time the print session is
	restarted. If the AS/400 print device is configured to use a font ID other than
	011, it is changed back to 011 when the AS/400 print session on SNA Server is
	restarted.
	
	CAUSE
	=====
	
	When an AS/400 print session is configured to use HPT, the print device on the
	AS/400 is updated each time the print session is started on the SNA Server
	computer. The print server passes various parameters to the AS/400 in the PIP
	(Program Initialization Parameters) data of the FMH-5 Attach message when it
	initializes a print session. The Font ID parameter is included in this PIP data,
	which causes the manually configured Font ID parameter to be reset on the AS/400
	print device.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The updated Snacfg.exe file allows the Font ID parameter to be configured for
	the AS/400 print sessions on SNA Server. The following is an example of the
	format of the command used to set this parameter for an existing AS/400 print
	session:
	
	  snacfg [#configpath] printsessionappc [printsessionname] /fontid:xxx
	
	Where xxx is the font ID that you want to use (for example, 011). Refer to the
	AS/400 documentation for a list of font IDs recognized by the AS/400.
	
	
	SNA Server versions 4.0 and 4.0 SP1 do not include all of the Host Print
	Transform (HPT) options that SNA Server versions 3.0 SP2 and 3.0 SP3 included.
	Only the following HPT options are available with SNA Server versions 4.0 and
	4.0 SP1 when using Manager or Snacfg.exe:
	
	- Message Queue Name
	
	- Message Lib Name
	
	- Printer Type
	
	The following options are available when HPT is configured on SNA Server versions
	3.0 SP2 and 3.0 SP3 when using Manager or Snacfg.exe:
	
	- Font ID
	
	- Message Queue Name
	
	- Message Lib Name
	
	- Form Feed
	
	- Printer Type and Model
	
	- Paper Source 1
	
	- Paper Source 2
	
	- Envelope Source
	
	- ASCII Code Page 899 Support
	
	- Customizing Library Name
	
	- Customizing Object Name
	
	For more information on the available HPT features when using SNA Server 3.0 SP2
	and 3.0 SP3, please refer to the following Knowledge Base article:
	
	  Q169892 Host Print Transform Can Now Be Configured by SNA Server
	
	For more information on a similar issue in SNA Server 4.0 and 4.0 SP1 regarding
	the Paper Source parameters, please refer to the following Knowledge Base
	article:
	
	  Q189621 Print Server Overrides Paper Source Parameters When Using HPT
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
