---
layout: page
title: "Q248831: BUG: Incorrect Symbols for Kerberos DLLs on Windows 2000"
permalink: kb/248/Q248831/
---

## Q248831: BUG: Incorrect Symbols for Kerberos DLLs on Windows 2000

	Article: Q248831
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbKernBase kbSecurity kbDSupport kbGrpDSKernBase
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using symbols of Kerberos DLLs on Windows 2000, the debugger reports a
	warning that there is a mismatch in the checksums between the symbol and the
	corresponding executable image.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The symbol files of some Kerberos DLLs on Windows 2000 have incorrect checksums
	in the headers. The following are the binaries which checksums are incorrect in
	the corresponding symbol files.
	
	- Rsabase.dll
	
	- Dssbase.dll
	
	- Rsaenh.dll
	
	- Dssenh.dll
	
	- Gpkcsp.dll
	
	- Slbcsp.dll
	
	- Schannel.dll
	
	- Msv1_0.dll
	
	- Kerberos.dll
	
	Even though the symbol file checksums are incorrect, the symbol information is
	valid and can be used for debugging.
	
	Also, the symbols of Kerberos.dll require the symbol path (sympath) to be set to
	the DLL directory containing the symbol file. Usually the sympath will be set to
	the symbols directory and the debuggers will look in the corresponding child
	directories to find the symbol file. But in this situation only Kerberos.dll
	requires the symbol path to point to the DLL directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbSecurity kbDSupport kbGrpDSKernBase 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
