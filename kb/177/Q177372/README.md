---
layout: page
title: "Q177372: HOWTO: Obtain Physical &amp; Virtual Memory with API Function Call"
permalink: /kb/177/Q177372/
---

## Q177372: HOWTO: Obtain Physical &amp; Virtual Memory with API Function Call

	Article: Q177372
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is useful to know the amount of physical and virtual memory
	available to Windows and applications running in Windows. This is accomplished
	under Win32 from Visual FoxPro for Windows by calling the GlobalMemoryStatus()
	application program interface (API) function.
	
	MORE INFORMATION
	================
	
	The GlobalMemoryStatus() is passed a MEMORYSTATUS structure that is defined as
	follows:
	
	     DWORD dwLength;          // Size of (MEMORYSTATUS).
	     DWORD dwMemoryLoad;      // Percent of memory in use.
	     DWORD dwTotalPhys;       // Bytes of physical memory.
	     DWORD dwAvailPhys;       // Free physical memory file.
	     DWORD dwTotalPageFile;   // Bytes of paging file.
	     DWORD dwAvailPageFile;   // Free bytes of paging file.
	     DWORD dwTotalVirtual;    // User bytes of address space.
	     DWORD dwAvailVirtual;    // Free user bytes.
	
	To obtain the current memory statistics, create a program in Visual FoxPro and
	type the following code:
	
	  
	
	     * Declare API function to retrieve memory information.
	     DECLARE GlobalMemoryStatus IN Win32API STRING @MemStat
	
	     #DEFINE CR CHR(13)
	
	     * long2str is passed a dwLength of 32; since structure is 32 bytes long.
	     * long2str is appended to a 28 byte blank buffer; a total of 32 bytes.
	     m.stru = long2str(32) + REPLICATE(CHR(0), 28)
	     =GlobalMemoryStatus(@m.stru)
	
	     * dwLength is 4 bytes, start extracting members at byte 5.
	     * Each member is 4 bytes long.
	     m.memoryload    = str2long(SUBSTR(m.stru, 5, 4))
	     m.totalphys     = str2long(SUBSTR(m.stru, 9, 4))
	     m.availphys     = str2long(SUBSTR(m.stru, 13, 4))
	     m.totalpagefile = str2long(SUBSTR(m.stru, 17, 4))
	     m.availpagefile = str2long(SUBSTR(m.stru, 21, 4))
	     m.totalvirtual  = str2long(SUBSTR(m.stru, 25, 4))
	     m.availvirtual  = str2long(SUBSTR(m.stru, 29, 4))
	
	     =MESSAGEBOX("Percent memory in use: " + STR(m.memoryload) + CR + ;
	     "Bytes of physical memory present: " + STR(m.totalphys) + CR + ;
	     "Bytes available physical memory: " + STR(m.availphys) + CR + ;
	     "Bytes of paging file: " + STR(m.totalpagefile) + CR + ;
	     "Bytes available paging file: " + STR(m.availpagefile) + CR + ;
	     "Total virtual memory: " + STR(m.totalvirtual) + CR + ;
	     "Available bytes virtual memory: " + STR(m.availvirtual), ;
	      0 + 64 + 0, ;
	     "GlobalMemoryStatus() results")
	
	     *******************************************************************
	     FUNCTION long2str
	     *******************************************************************
	     * passed : 32-bit non-negative numeric value (m.longval).
	     * returns : ASCII character representation of passed value in
	     *           low-high format (m.retstr).
	     * example :
	     *    m.long = 999999
	     *    m.longstr = long2str(m.long)
	
	     PARAMETERS m.longval
	
	     PRIVATE i, m.retstr
	
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	     m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	     m.longval = MOD(m.longval, (2^i))
	     NEXT
	     RETURN m.retstr
	
	     *******************************************************************
	     FUNCTION str2long
	     *******************************************************************
	     * passed:  4-byte character string (m.longstr) in low-high ASCII format.
	     * returns: Long integer value.
	     *
	     * example:
	     *   m.longstr = "1111"
	     *   m.longval = str2long(m.longstr)
	
	     PARAMETERS m.longstr
	
	     PRIVATE i, m.retval
	
	     m.retval = 0
	     FOR i = 0 TO 24 STEP 8
	     m.retval = m.retval + (ASC(m.longstr) * (2^i))
	     m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	     NEXT
	     RETURN m.retval
	     * End of GlobalMemoryStatus code
	
	The results from the program are listed below.
	
	The "Percent memory in use" figure has nothing to do with the percentage of
	virtual memory in use at the time. In Microsoft documentation it is defined as
	"a measure of how busy the memory management system is." It can be calculated as
	50 percent of the ratio of the committed (requested for use by an application)
	memory pages to the physical (actual RAM) memory pages managed by Windows 95.
	
	The "Bytes of physical memory present" figure is the amount of physical RAM minus
	any holes in the upper memory area (UMA), used by adapters, and so forth.
	
	The "Bytes of available physical memory" figure shows how much of this physical
	memory is available.
	
	The "Bytes of paging file" figure is the size of the current paging file. This
	figure represents the number of bytes in the paging file that are uncommitted to
	any process.
	
	The "Total Virtual Memory" figure indicates the size of the process' address
	space. Under Windows 95, this figure is exactly 4 MB short of being 2 GB. Under
	Windows 95 every process has a 2 GB private address space and the lower 4 MB of
	this address space is protected. Under Windows NT, this figure would always be
	128 KB short of 2 GB, since Windows NT protects the 64 KB at the start and end
	of the process' 2 GB private address space.
	
	All of these figures would be exactly the same, no matter which process called
	GlobalMemoryStatus() except the "Available virtual memory" figure. To calculate
	this value, GlobalMemoryStatus() adds up all the free regions in the process'
	address space. This number can shrink and grow, but indicates that Visual FoxPro
	for Windows has reserved approximately 9 MB of its 2 GB address space at the
	moment the program was executing.
	
	REFERENCES
	==========
	
	"Advanced Windows: the Developer's Guide to the Win32 API for Windows NT
	3.5 and Windows 95," Jeffrey Richter, chapters 4-6, Microsoft, 1995
	
	"Windows 95 System Programming Secrets," Matt Pietrek, IDG Books Worldwide, 1995
	
	Visual C++ Help: GlobalMemoryStatus
	
	Additional query words: API physical memory virtual memory
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
