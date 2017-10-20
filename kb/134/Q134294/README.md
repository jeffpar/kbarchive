---
layout: page
title: "Q134294: Compression and Decompression of Attached Files in a BBS"
permalink: /kb/134/Q134294/
---

## Q134294: Compression and Decompression of Attached Files in a BBS

{% raw %}

	Article: Q134294
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how The Microsoft Network compresses and decompresses
	files attached to bulletin board (BBS) messages.
	
	MORE INFORMATION
	================
	
	When you attach a file to a message and send it, the BBS editor scans the file
	header to see if the file has been compressed using PKZip. If the file is not
	compressed with PKZip, the BBS compresses the file automatically before sending
	the message. A file compressed with PKZip is sent unchanged.
	
	When you download files, The Microsoft Network automatically decompresses files
	that it automatically compressed. If the file was attached as a PKZip-compressed
	file, and the option to automatically decompress files is selected, then The
	Microsoft Network automatically decompresses the PKZip-compressed file.
	Otherwise, the file stays in a PKZip-compressed format, and you must decompress
	it.
	
	To set the option to automatically decompress files, use these steps:
	
	1. In the BBS window, on the Tools menu, click File Transfer Status.
	
	2. In the File Transfer Status window, on the Tools menu, click Options.
	
	3. Click the Automatically Decompress Files check box to select it.
	
	4. Click OK.
	
	Additional query words: 1.2 msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	

{% endraw %}
