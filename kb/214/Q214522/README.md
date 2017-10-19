---
layout: page
title: "Q214522: Fatal Exception in IOS.VXD When Formatting Disk in LS-120 Drive"
permalink: /kb/214/Q214522/
---

## Q214522: Fatal Exception in IOS.VXD When Formatting Disk in LS-120 Drive

	Article: Q214522
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg osr2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to format a floppy disk using an LS-120 floppy disk drive drive
	with a third-party ATAPI/IDE miniport driver, you may receive the following
	error message on a blue screen:
	
	  An exception 0E has occurred at 0028:C0021E77 in VxD IOS(01) + 00001197. This
	  was called from 0028:C00219AF in VxD IOS(01) + 00000CCF.
	
	CAUSE
	=====
	
	This problem occurs because the data is being moved in words (16-bit segments)
	instead of bytes (8-bit segments).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
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
	
	+------------------------------------------------------+
	| Date     | Time   | Version   | Size   | File name   | 
	+------------------------------------------------------+
	| 11/13/98 | 08:01p | 4.00.1114 | 10,223 | Diskvsd.vxd | 
	+------------------------------------------------------+
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	To work around this issue, remove the third-party miniport driver and use the
	Esdi506.pdr driver included with Windows 98.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is known to occur with the Agate Technologies Agaatapi.mpd file.
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
