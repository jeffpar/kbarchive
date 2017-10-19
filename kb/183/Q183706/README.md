---
layout: page
title: "Q183706: XFOR: File Status Table Contains Invalid Entry; Dirsync Fails"
permalink: /kb/183/Q183706/
---

## Q183706: XFOR: File Status Table Contains Invalid Entry; Dirsync Fails

	Article: Q183706
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A time stamp in the file status table (Filestat.tbl file) may contain a seconds
	field that is set to 100 hundredths of a second, even though you did not modify
	the Filestat.tbl file manually. If you attempt to perform directory
	synchronization (dirsync) between Microsoft Exchange Server and Lotus Notes
	using this Filestat.tbl file, directory synchronization may fail. The directory
	synchronization log may contain entries similar to the following:
	
	- DXM(0093) 4 68000:DX Agent ENTUSHUB(DXAVM) starting
	
	- DXM(0093) 4 00020:Warning {Not found} - Could not obtain the value of the FST
	  keyword in the LME-PROFS-DXA section. Using the default value
	  'DXAVM\FileStat.tbl'
	
	- DXM(0093) 1 68344:{Buffer too small} - Could not initialize the FSTLoad
	  subsystem
	
	- DXM(0093) 4 04117:Queue item q\dxa.in\5000092A.rdy in queue dxa.in has been
	  marked as bad
	
	- DXM(0093) 4 68009:DX Agent ENTUSHUB(DXAVM) ending: {Buffer too small}
	
	- DXM(0093) 1 62302:Error {Buffer too small}: Inbound processing failed
	
	- DXM(0093) 1 62112:DX Manager failed: {Buffer too small}
	
	CAUSE
	=====
	
	There is a problem in LinkAge Message Exchange that can cause a time stamp in
	the Filestat.tbl file to contain a seconds field that is set to 100 hundredths
	of a second. Because the entry in the Filestat.tbl file is too long, directory
	synchronization may fail.
	
	WORKAROUND
	==========
	
	To work around this problem, rename the Filestat.tbl file, then start dirsync.
	The file will only be automatically recreated after dirsync is started. It will
	not be automatically recreated by starting the dirsync process in the LinkAge
	administrator, or by stopping and starting the LinkAge directory service in the
	Control Panel Services tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The Filestat.tbl file can also contain an entry that is too long if you modify
	the file manually.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
