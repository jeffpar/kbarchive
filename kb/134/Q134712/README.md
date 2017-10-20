---
layout: page
title: "Q134712: DIR /C Returns Compression Ratio for Uncompressed Files"
permalink: /kb/134/Q134712/
---

## Q134712: DIR /C Returns Compression Ratio for Uncompressed Files

{% raw %}

	Article: Q134712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DIR /C or DIR /CH command on a volume that is compressed with
	DriveSpace 3.0, a compression ratio may be returned for files that have not been
	compressed. The ratio may be as high as 64:1.
	
	CAUSE
	=====
	
	The DIR /C command displays the compression ratio of a file, assuming that the
	file is located on a drive using 8K clusters. This command returns an estimated
	compression ratio for all files, regardless of their compression status, as if
	they were compressed on a drive with 8K clusters.
	
	The DIR /CH command may return a more accurate value if the cluster size is not
	8K, as it references the cluster size of the host partition for its estimates.
	However, this command also returns an estimated compression ratio for all files
	saved to the drive.
	
	MORE INFORMATION
	================
	
	Microsoft Plus! for Windows 95 installs DriveSpace 3.0 and System Agent by
	default unless you choose not to.
	
	You can save uncompressed files to a compressed volume when the No Compression
	option is selected for the drive.
	
	You can configure the Compression Agent with System Agent to compress the files
	at a later time. This configuration maximizes system performance by delaying the
	compression of files written to the drive until the computer is idle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Plus! for Windows
	95. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
