---
layout: page
title: "Q268332: Err Msg: Setup of Certificate Server Certificate Authority Fa"
permalink: /kb/268/Q268332/
---

## Q268332: Err Msg: Setup of Certificate Server Certificate Authority Fa

{% raw %}

	Article: Q268332
	Product(s): Internet Information Server
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Certificate Server 1.0 by using the Windows NT
	Windows Option Pack (NTOP) Setup program, and you choose the Show Advanced
	Configuration option, the following error message may occur:
	
	  Setup of "Certificate Server Certificate Authority" failed. The specific
	  error code is 0x350e644. Setup will continue but the component may not
	  function properly.
	
	CAUSE
	=====
	
	This error message (or similar) may occur if you chose the hash method
	(algorithm) SSL3 SHAMD5 in the Advanced Configuration section of the setup
	routine.
	
	Other hash methods may encounter this same type of error message.
	
	RESOLUTION
	==========
	
	For SSL 3.0 and 128-bit encryption support, you need to choose either SHA-1 or
	MD5 (MD5 is the default hash algorithm) instead of SSL3 SHAMD5.
	
	SSL SHAMD5 is a valid hash type, but it cannot be used to sign certificates. It
	is used only during the SSL handshake, as part of the client authentication
	process.
	
	MORE INFORMATION
	================
	
	In Certificate Server 1.0, Setup enumerates all algorithms supported by the
	Cryptographic Services Provider (CSP) and puts them in the visible list. This
	includes hash algorithms that may or may not support signing. This allows you to
	choose a hash that cannot be signed as a CA (Certificate Authority), and fails
	during the Create and Sign section of the setup.
	
	In Certificate Server 2.0 (installed though Windows 2000 Setup), the setup
	routine checks if the selected Cryptographic Services Provider supports signing,
	and filters out all hashes that are not designated for signing (for example SSL3
	SHAMD5). Further, if the CSP does not support the new flags that are available
	to distinguish hash-signing capabilities, setup does a signing test before
	leaving this screen to verify that this CSP supports signing with the selected
	hash. If it does not support signing on the selected hash, a warning dialog box
	appears so that you can select another hash.
	
	Additional query words: error certserver setup ca
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : winnt:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
