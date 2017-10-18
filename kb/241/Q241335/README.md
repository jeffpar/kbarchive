---
layout: page
title: "Q241335: FtpBrowseShowLongDate Only Operates at Master Property Level"
permalink: kb/241/Q241335/
---

## Q241335: FtpBrowseShowLongDate Only Operates at Master Property Level

	Article: Q241335
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FtpDirBrowseShowLongDate property indicates whether or not to display two or
	four-digit years when you browse directories.
	
	The Internet Information Services (IIS) 5.0 documentation states the following:
	
	  This property [FtpDirBrowseShowLongDate] is accessible at the following
	  locations:
	
	  Metabase Path:
	
	  /LM/MSFTPSVC
	  /LM/MSFTPSVC/n
	  /LM/MSFTPSVC/n/ROOT
	  /LM/MSFTPSVC/n/ROOT/FtpVirtualDir
	
	However, the documentation is incorrect. It is only possible to set the property
	at the following locations:
	
	  Metabase Path:
	
	  /LM/MSFTPSVC
	  /LM/MSFTPSVC/n/ROOT/FtpVirtualDir
	
	Although, you can set the FtpDirBrowseShowLongDate property on an FTP virtual
	directory (/LM/MSFTPSVC/n/ROOT/FtpVirtualDir), it is ignored when the metabase
	is read. The FtpDirBrowseShowLongDate property can only be implemented for the
	entire FTP service (/LM/MSFTPSVC).
	
	RESOLUTION
	==========
	
	The FtpDirBrowseShowLongDate is only read and implemented from the /LM/MSFTPSVC
	level in the metabase.
	
	WARNING: Modifying the metabase incorrectly can cause serious problems that may
	require you to reinstall IIS 5.0. Microsoft cannot guarantee that problems
	resulting from incorrectly modifying the metabase can be resolved. Modify the
	metabase at your own risk.
	
	Run the Adsutil.vbs utility from <%SYSTEMDRIVE%>\Inetpub\AdminScripts. When
	you set the FtpDirBrowseShowLongDate property Adsutil.vbs set
	/Msftpsvc/FtpDirBrowseShowLongDate <Value>, <Value> can be set to
	TRUE or FALSE. A true value displays four-digit years and a false value display
	two-digit years.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: metabase iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
