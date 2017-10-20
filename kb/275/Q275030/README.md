---
layout: page
title: "Q275030: XCON: Exchange Server MTA Does Not Process Accented Characters"
permalink: /kb/275/Q275030/
---

## Q275030: XCON: Exchange Server MTA Does Not Process Accented Characters

{% raw %}

	Article: Q275030
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55 kbExchange550SP5Fea kbExchange550PreSP5fea
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If attachments with file names that contain accented characters (escape
	sequences) are sent to and from Exchange Server computers, when a user tries to
	save the file in the client, the file name is not preserved. Instead, the
	accented characters are replaced by an ASCII representation of that character
	because the message transfer agent (MTA) does not process escape sequences in
	attachment names.
	
	MORE INFORMATION
	================
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior
	described in this article and should be applied only to systems having a
	specific need for it. This feature may receive additional testing at a later
	time, to further ensure product quality. Therefore, if you are not severely
	affected by the lack of this feature, Microsoft recommends that you wait for the
	next Microsoft Exchange Server version 5.5 service pack that contains this
	feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.47 | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Ems_rid.dll  | N/A         | 
	+----------------------------+
	| Mtacheck.exe | N/A         | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtaperf.dll  | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.TPL     | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| X400om.dll   | N/A         | 
	+----------------------------+
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA exc55 kbExchange550SP5Fea kbExchange550PreSP5fea 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
