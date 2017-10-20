---
layout: page
title: "Q182626: Access Is Denied When Attempting to Put Files on FTP Server"
permalink: /kb/182/Q182626/
---

## Q182626: Access Is Denied When Attempting to Put Files on FTP Server

{% raw %}

	Article: Q182626
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a file and then immediately copy a file with the same name to
	the FTP server, an "Access is Denied" error message may occur. The following
	command sequence will result in the "Access is Denied" error:
	
	  
	
	  PUT myfile.txt
	  [file is transferred to FTP server]
	  GET myfile.txt
	  [file is transferred from FTP server to FTP client]
	  DEL myfile.txt
	  [file is deleted from FTP server]
	  PUT myfile.txt
	  [file is supposed to be transferred to FTP server,
	  however, you will get an "Access is denied" message]
	
	CAUSE
	=====
	
	The FTP server caches the file handles of the deleted files that were previously
	fetched preventing their deletion. After a minimum cache sweep period, the file
	finally gets deleted when the cached file handle is closed. If the same file is
	put on the server before this minimum sweep interval has elapsed, the Put
	command fails with the "Access is Denied" error message.
	
	RESOLUTION
	==========
	
	To work around the problem, do one of the following:
	
	After deleting the file, wait for a short time (about 30 seconds), and then copy
	(put) the new file to the FTP server.
	
	-or-
	
	Rename the file that is to be deleted, copy the new file to the FTP server, and
	then delete the renamed file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0.
	
	
	MORE INFORMATION
	================
	
	The following registry information may also be helpful in regards to this
	issue.
	
	Please be aware that by adding the following registry information, you may
	negatively impact the performance of the FTP server.
	
	If you want to completely disable file caching on your server, set the following
	parameter:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\InetInfo\Parameters\DisableMemoryCache
	  DWORD 1
	
	If you want to set a time value for caching set:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\InetInfo\Parameters\ObjectCacheTTL
	  DWORD <value_in_seconds>
	
	You can set these parameters under the following as well:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3SVC\Parameters
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSFTPSVC\Parmeters
	
	However, here is the hierarchy:
	
	If a value is set under Inetinfo, then that is the value that is used, as this is
	the host for W3svc.dll and Ftpsvc2.dll. If you set the value under W3SVC, then
	this is used not only for W3SVC but also MSFTPSVC. Therefore, if you set the
	W3SVC ObjectCacheTTL to 120 (seconds) and the MSFTPSVC DisableMemoryCache to 1,
	then everything is cached for 120 seconds.
	
	Try checking for these parameters (particularly a time value for ObjectCacheTTL)
	and test by adding the DisableMemoryCache key under Inetinfo to see if that
	resolves the issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
