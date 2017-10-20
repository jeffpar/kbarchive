---
layout: page
title: "Q214649: How To Program EBCDIC - ASCII Conversion Using The NLS API"
permalink: /kb/214/Q214649/
---

## Q214649: How To Program EBCDIC - ASCII Conversion Using The NLS API

{% raw %}

	Article: Q214649
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsamplekbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNANLS API allows you to convert single-byte character stream (SBCS)
	EBCDIC-to-Unicode-to-ANSI and SBCS ANSI-to-Unicode-to-EBCDIC by leveraging the
	Win32 National Language Support (NLS) API. The NLS API uses resource files
	containing NLS conversion tables that are installed on the target personal
	computer by the Setup program for SNA Server 3.0 and later (the Setup program
	also adds the required registry entries). The resource file Snanls.dll is
	supplied with SNA Server 3.0 and later.
	
	The SNANLS API is documented in the Snanls.h file. The following functions make
	up the SNANLS API:
	
	- SnaNlsInit - Initialization routine for SNANLS.
	
	- SnaNlsMapString - SNANLS translation routine.
	
	Normally, you would use the CONVERT verb, or a proprietary method for converting
	to and from EBCDIC/ASCII. With the NLS API, this can be done natively. Also, the
	CONVERT verb is limited in the conversions it can do without the user building a
	conversion table.
	
	This article will discuss how to replace the CONVERT verb with NLS. This can also
	be applied for other methods of doing EBCDIC/ASCII conversion. For more
	information on the NLS API, please see the SNA SDK documentation.
	
	MORE INFORMATION
	================
	
	Normally, you would call the convert verb as follows for both ASCII->EBCDIC
	and EBCDIC->ASCII conversions.
	
	  /*****************************************************************************/ 
	  /* ConvertAtoE - Converts ASCII string to EBCDIC                             */ 
	  /*****************************************************************************/ 
	  void ConvertAToE(IN OUT UCHAR *string, unsigned short length)
	  {
	          convert cnvt;
	          CLEARCNVT;
	
	          cnvt.opcode       = SV_CONVERT;
	          cnvt.direction    = SV_ASCII_TO_EBCDIC;
	          cnvt.char_set     = SV_A;
	          cnvt.len          = length;
	          cnvt.source       = string;
	          cnvt.target       = string;
	
	          ACSSVC_C((long)(char *) &cnvt);      /* Call ACSSVC - go convert! */ 
	  }
	
	  /*****************************************************************************/ 
	  /* ConvertEToA - Converts EBCDIC string to ASCII                             */ 
	  /*****************************************************************************/ 
	  void ConvertEToA(IN OUT UCHAR *string, unsigned short length)
	  {
	          convert cnvt;
	          CLEARCNVT;
	          cnvt.opcode       = SV_CONVERT;
	          cnvt.direction    = SV_EBCDIC_TO_ASCII;
	          cnvt.char_set     = SV_A;
	          cnvt.len          = length;
	          cnvt.source       = string;
	          cnvt.target       = string;
	
	          ACSSVC_C((long)(char *) &cnvt);      /* Call ACSSVC - go convert! */ 
	  }
	
	Using the NLS API requires a little more code, but does not limit you to a
	specific character set. First, you have to include the Nls.h file into your
	program. Next, you have to declare a few variables as follows:
	
	  HINSTANCE hNls;
	  int (WINAPI *pfnNlsInit)(UINT);
	  int (WINAPI *pfnNlsMapString)(LPCSTR,LPSTR,UINT,UINT,int,int,UINT,UINT,PULONG);
	  UINT EbcdicPage = CP_37; // EBCDIC Lower English
	  UINT AnsiPage = CP_ACP;  // ANSI Code Page
	
	Next, be sure you can load Snanls.dll. Note that the FreeResources function frees
	up our handle here.
	
	  /*****************************************************************************/ 
	  /* FreeResources - Frees up the NSL library						             */ 
	  /*****************************************************************************/ 
	  void FreeResources()
	  {
	  	FreeLibrary( hNls );
	  	hNls = NULL;
	  	pfnNlsMapString = NULL;
	  }
	
	  /*****************************************************************************/ 
	  /* InitNLS - Load SNANLS Library to be used in ANSI<->EBCDIC conversion      */ 
	  /*****************************************************************************/ 
	  int InitNLS()
	  {
	  	hNls = LoadLibrary( "SNANLS.DLL" );
	  	if( hNls != NULL )
	  	{
	  		//printf("Loaded SNANLS, handle %u\n", hNls);
	
	  		pfnNlsMapString = (int (WINAPI *)(LPCSTR,LPSTR,UINT,UINT,int,int,UINT,UINT,PULONG))
	  			GetProcAddress(hNls,"SnaNlsMapString");
	
	  		pfnNlsInit = (int (WINAPI *)(UINT))GetProcAddress(hNls,"SnaNlsInit");
	
	  		if( pfnNlsMapString == NULL || pfnNlsInit == NULL )
	  		{
	  			printf("SnaNlsMapString() not found in SNANLS.DLL\n");
	  			FreeResources();
	  			return(FALSE);
	  		}
	  		else
	  		{
	  			// 
	  			// Verify that the EBCDIC code page is supported in SNANLS
	  			// 
	  			if( !pfnNlsInit(EbcdicPage) )
	  			{
	  				printf("EbcdicPage %d not supported in SNANLS\n", EbcdicPage);
	  				FreeResources();
	  				return(FALSE);
	  			}
	  		}
	  	}
	  	else
	  	{
	  		printf("Unable to load SNANLS.DLL\n");
	  		hNls = NULL;
	  		return(FALSE);
	  	}
	  	return(TRUE);
	  }
	
	If the InitNLS function returns back TRUE to us, we are now ready to begin using
	NLS for conversions. The following two functions would be used to replace the
	original conversion functions:
	
	  /*****************************************************************************/ 
	  /* NLSAtoE - Converts ASCII string to EBCDIC using NLS                       */ 
	  /*****************************************************************************/ 
	  void NLSAToE( IN OUT UCHAR *string, ULONG length )
	  {
	  	ULONG i;
	  	UCHAR E[MAX_PATH+1];
	  	ULONG Options = 0;
	
	  	E[0] = '\0';
	  	i = (ULONG)pfnNlsMapString( (LPCSTR)string,
	  				(LPSTR)E,
	  				AnsiPage,
	  				EbcdicPage,
	  				length,
	  				sizeof(E),
	  				SNA_MULTIBYTE,
	  				SNA_MULTIBYTE,
	  				&Options );
	  	if( i )
	  	{
	  		CopyMemory( string, E, i );
	  	}
	  }
	
	  /*****************************************************************************/ 
	  /* NLSEToA - Converts EBCDIC string to ASCII using NLS                       */ 
	  /*****************************************************************************/ 
	  void NLSEToA( IN OUT UCHAR *string, IN ULONG length )
	  {
	  	ULONG i;
	  	UCHAR A[MAX_PATH+1];
	  	ULONG Options = 0;
	  	
	  	A[0] = '\0';
	  	i = (ULONG)pfnNlsMapString( (LPCSTR)string,
	  				(LPSTR)A,
	  				EbcdicPage,
	  				AnsiPage,
	  				length,
	  				sizeof(A),
	  				SNA_MULTIBYTE,
	  				SNA_MULTIBYTE,
	  				&Options );
	  	if( i )
	  	{
	  		CopyMemory( string, A, i );
	  	}
	  }
	
	All you have to do is call the new functions the same as the original functions
	to use NLS conversion.
	
	For information on how to retrieve Link information, see Q214572. For information
	on how to retrieve 3270 LU information see Q214629. For additional information
	on the SNA Server APIs please see the SNA SDK documentation that is included
	with SNA Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
