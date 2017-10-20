---
layout: page
title: "Q149823: 3D Movie Maker: ErrMsg: You Do Not Have a Multimedia Driver"
permalink: /kb/149/Q149823/
---

## Q149823: 3D Movie Maker: ErrMsg: You Do Not Have a Multimedia Driver

{% raw %}

	Article: Q149823
	Product(s): Microsoft Home Kids Products
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmm kbsetupkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run 3D Movie Maker, you receive the following error
	message:
	
	  Microsoft ADPCM Audio CODEC
	  You do not have a multimedia driver needed by this application. We will now
	  try to install the driver for you. Once it is installed, you will need to
	  restart the application.
	
	RESOLUTION
	==========
	
	This error message occurs if the Microsoft ADPCM CODEC, or the driver listed in
	the title of the error message, is not installed or is disabled. The following
	steps describe how to install and enable the appropriate multimedia driver:
	
	1. When the error message appears, click OK. When you are prompted, insert the
	  specified Windows Setup disks or CD-ROM.
	
	2. Run 3D Movie Maker.
	
	If the problem persists, then the multimedia driver listed in the error message
	may be disabled. To enable the driver, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Advanced (Devices in Windows 98) tab, double-click Audio Compression
	  Codecs.
	
	4. Click Microsoft ADPCM CODEC, and then click Properties.
	
	5. Click Use This Audio Codec, click OK, click OK, and then close Control Panel.
	
	For more information about installing Windows multimedia components, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142731 How to Install and Remove Codecs and MCI Devices in Windows
	
	MORE INFORMATION
	================
	
	You receive this error message if any of the multimedia drivers that 3D Movie
	Maker uses are not installed, or if they are disabled. The title bar of the
	error message displays the name of the specific multimedia driver that is
	missing or disabled. For example, the title bar may reference the Microsoft
	ADPCM Audio CODEC or [MCI] Microsoft Video for Windows.
	
	If the multimedia driver is missing, you are prompted to use the Windows Setup
	disks or disc and install the driver. If the driver was removed, this reinstalls
	it properly.
	
	If the driver was disabled prior to being removed, the driver will be disabled
	when it is reinstalled. In that case, it is necessary to enable the driver as
	"Resolution" section of this article.
	
	Additional query words: kids mczee kbmm director animated movies melanie 3-d three dimensional 3d 3dmm compression decompression codecs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbsetup kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
