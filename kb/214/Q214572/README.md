---
layout: page
title: "Q214572: How To Retrieve Link Information For SNA Server Programmatically"
permalink: /kb/214/Q214572/
---

## Q214572: How To Retrieve Link Information For SNA Server Programmatically

{% raw %}

	Article: Q214572
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSamplekbfaq
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server currently does not expose any APIs directly to gather link status
	information. However, the APPC DISPLAY management verb does allow some
	information to be gathered on the status of links that are not in an inactive or
	"On Demand" state. The following code is a console application that will display
	the status of these links in an SNA domain. It can be easily adapted to monitor
	to see if a link is "missing" in the list, which would indicate that the link
	has gone inactive, or to monitor the other status indicators (for example,
	pending).
	
	MORE INFORMATION
	================
	
	The following header file contains all the includes, macros, and functions used
	by the test program. With SNA Server 4.0 and it's multinode support, up to 64
	nodes are supported in 1 SNA domain. In your program, you may want to reduce the
	MAXNODES value to the number of nodes/Sna Server computers you have in your
	domain.
	Also, the DISPLAY management verb supports a maximum buffer size of 64 KB. You
	may also want to reduce this value in your program. Do not attempt to exceed
	this value as unpredictable results may occur.
	
	In addition, be sure to link with the correct library files (Wincsv32.lib and
	Wappc32.lib).
	
	  // linktest.h
	  #if !defined(LINKTEST_H_INCLUDED_)
	  #define LINKTEST_H_INCLUDED_
	
	  #include "wincsv.h"
	  #include "winappc.h"
	  #include "winmgt.h"
	
	  #define CLEARDISPVCB memset(dispvcbptr,0,sizeof(dispvcb))
	  #define ZERODATABUFFER ZeroMemory( &DataBuffer, sizeof(DataBuffer) )
	  #define SWAPWORD(x) ((unsigned short)MAKEWORD(HIBYTE(x),LOBYTE(x)))
	  #define SWAPDWORD(x) ((unsigned long)MAKELONG(SWAPWORD(HIWORD(x)),SWAPWORD(LOWORD(x))))
	  #define MAXNODES 64
	  #define BUFFERSIZE  65535
	  #define WinAPPCVERSION  0x0001
	
	  typedef union dispvcb_u
	  {
	  	struct appc_hdr hdr;
	  	struct display display;
	  } dispvcb_t;
	
	  typedef struct dbstruct
	  {
	          unsigned char dbuf[BUFFERSIZE];
	  } dbufstruct;
	
	  typedef struct namestructag
	  {
	          char boxname[MAXNODES][32];
	          char nodename[MAXNODES][8];
	          char shortname[MAXNODES][18];
	          int nodenumber;
	  } namestruct;
	
	  #endif //LINKTEST_H_INCLUDED_
	
	What follows is the main code segment for the test program. Each function is
	documented as to what it is doing.
	
	  //SNAnls.cpp
	
	  #include <stdio.h>
	  #include <windows.h>
	  #include "linktest.h"
	
	  /*****************************************************************************/ 
	  /* ConvertEToA - Converts EBCDIC string to ASCII using Convert verb          */ 
	  /*****************************************************************************/ 
	  void ConvertEToA(IN OUT UCHAR *string, int length)
	  {
	          convert cnvt;
	
	          memset((char*)&cnvt,0,sizeof(cnvt));
	          cnvt.opcode       = SV_CONVERT;
	          cnvt.direction    = SV_EBCDIC_TO_ASCII;
	          cnvt.char_set     = SV_A;
	          cnvt.len          = length;
	          cnvt.source       = string;
	          cnvt.target       = string;
	
	          ACSSVC_C((long)(char *) &cnvt);
	  }
	
	  /*****************************************************************************/ 
	  /* EBC_to_ASCII - Converts EBCDIC string to ASCII using Convert verb         */ 
	  /*****************************************************************************/ 
	  void EBC_to_ASCII(char *dest, unsigned char *src)
	  {
	  	unsigned char temp[8];
	
	  	FillMemory( temp, sizeof(temp), 0);
	  	memcpy( temp, src, 8);
	  	// convert from EBCDIC A to ASCII
	  	ConvertEToA(temp,8);
	  	ZeroMemory(dest,sizeof(dest) );
	  	strncpy( dest, (char*)temp, 8);
	  	strncpy( dest + 8, "\0", 1);
	  	return;
	  }
	
	  /*****************************************************************************/ 
	  /* show_usage - displays command line usage
	  /*****************************************************************************/ 
	  void show_usage()
	  {
	          printf("\nLinkTest\n");
	          printf("This application is a simple commmand line application\n");
	          printf("that returns the status of all link services in a SNA\n");
	          printf("Domain that are currently active or pending.\n");
	          printf("\nNOTE: The Display Management verbs do NOT return status\n");
	  		printf("on link services that are marked as unavailable or ON DEMAND\n");
	  		printf("\n\n");
	      return;
	  }
	
	  /*****************************************************************************/ 
	  /* DisplayVerbFailed - Prints to console Primary and Secondary Return Codes  */ 
	  /* if AP_OK is not returned.  If the primary RC = COMM_SUBSYSTEM_NOT_LOADED  */ 
	  /* (F004) this will also print a message that the SNA Server service may not */ 
	  /* be running                                                                */ 
	  /*****************************************************************************/ 
	  void DisplayVerbFailed(unsigned short prim_rc, unsigned long sec_rc)
	  {
	  	printf("\nDisplay Verb Primary RC = %X\n",SWAPWORD(prim_rc) );
	  	printf("Display Verb Secondary RC = %X\n",SWAPDWORD(sec_rc));
	  	// if actual return code is 1264
	  	// - nt pickes this up as 4F0 - AP_COMM_SUBSYSTEM_NOT_LOADED (F004)
	  	// lets display an message that the snaservr service may not be running
	  	// this is usually the cause that I've seen within the application
	  	if (prim_rc == 1264)
	  	{
	  		printf("\n*** The SNA Server Service may not be running.\n");
	  		printf("    Plese check all services on the SNA Server\n\n");
	  	}
	  }
	
	  /*****************************************************************************/ 
	  /* DSPAppcError - This uses the GetAppcReturnCode API to display a text      */ 
	  /* that can help in troublshooting the failure. This also checks to see if   */ 
	  /* the buffersize is too small to return the information requested           */ 
	  /*****************************************************************************/ 
	  void DSPAppcError(dispvcb_t *dispvcb)
	  {
	  	char errorbuf[1024];
	  	GetAppcReturnCode((struct appc_hdr *) &(dispvcb->hdr), 1024, (unsigned char *)errorbuf);
	  	printf("\n%s\n",errorbuf);
	  		// if actual return code is 1b4 (sna picks up as B4010000) before
	  		// converting it then let's trace the error and other parameters.
	  	if (dispvcb->display.secondary_rc ==  3019964416)
	  	{
	  		printf("\nBUFFER IS TO SMALL\n");
	  		printf("Area Needed is %lu bytes\n",dispvcb->display.area_needed);
	  		printf("Area Returned is %lu bytes\n",dispvcb->display.display_len);
	  		printf("Area Available is %i bytes\n",BUFFERSIZE);
	  	}
	  }
	
	  /*****************************************************************************/ 
	  /* SetLength - removes terminating spaces and trash from string variable     */ 
	  /* and ensures there is a terminating null                                   */ 
	  /*****************************************************************************/ 
	  void SetLength(char *string, int length)
	  {
	  	char *p = NULL;
	  	if ((p=(char *)memchr(string,' ',length)) != NULL)
	  	{
	  		*p='\0';
	  	}
	  	else
	  	{
	  		strncpy( string + length, "\0", 1);
	  	}
	  }
	
	  /*****************************************************************************/ 
	  /* SetupString - copy's string to dest and set's length with null terminator */ 
	  /*****************************************************************************/ 
	  void SetupString(char *dest, char *src, int length)
	  {
	  	ZeroMemory(dest,sizeof(dest) );
	  	strncpy(dest, src, length);
	  	SetLength(dest, length);
	  }
	
	  /*****************************************************************************/ 
	  /* GetActiveServers - calls the Display management verb to retrieve a list   */ 
	  /* of active servers in the SNA Domain.                                      */ 
	  /*****************************************************************************/ 
	  void GetActiveServers(dispvcb_t *dispvcb, dbufstruct *DataBuffer)
	  {
	  	dispvcb->display.opcode = AP_DISPLAY;
	  	dispvcb->display.init_sect_len = (unsigned long)&(((DISPLAY *)0)->sna_global_info_ptr);
	  	dispvcb->display.num_sections = 0x10;
	  	dispvcb->display.buffer_len = sizeof(DataBuffer->dbuf);
	  	dispvcb->display.buffer_ptr = DataBuffer->dbuf;
	  	dispvcb->display.lu_def_info = AP_NO;
	
	  	strcpy( (char *)DataBuffer->dbuf, "CSEXTNIDCSLISTND" );
	  	APPC( (long)dispvcb );
	  }
	
	  /*****************************************************************************/ 
	  /* GetNodes - fills in gNames with a list of available servers/nodes in the  */ 
	  /* SNA Domain                         .                                      */ 
	  /*****************************************************************************/ 
	  bool GetNodes(namestruct *Names)
	  {
	  	char buffer1[40], buffer2[40];
	  	int i, pos;
	  	char ch[1];
	  	dispvcb_t dispvcb;
	  	char *dispvcbptr;
	  	dbufstruct DataBuffer;
	
	  	dispvcbptr=(char *)&dispvcb;
	  	CLEARDISPVCB;
	  	ZERODATABUFFER;
	
	  	GetActiveServers(&dispvcb, &DataBuffer);
	  	if( dispvcb.display.primary_rc != AP_OK )
	  	{
	  		// call failed, display message
	  		DisplayVerbFailed(dispvcb.display.primary_rc, dispvcb.display.secondary_rc);
	  		DSPAppcError(&dispvcb);
	  		return false;
	  	}
	  	else
	  	{
	  		unsigned short *pw = (unsigned short *)DataBuffer.dbuf;
	  		char *lpData;
	  		if( (*pw > 0) && (*pw < MAXNODES+1))
	  		{
	  			lpData = (char *)&DataBuffer.dbuf[2];
	  			for( i = 0; i < *pw; i++ )
	  			{
	  				memcpy(&Names->nodename[i][0],(lpData + i*40), 8);
	  				memcpy(&Names->boxname[i][0],(lpData + i*40 + 8),32);
	  				// Now we have to create the shortname for the boxname
	  				// This will convert "SERVNAME         02"
	  				// to "SERVNAME.02"
	  				ZeroMemory(buffer1,sizeof(buffer1) );
	  				ZeroMemory(buffer2,sizeof(buffer2) );
	  				memcpy( (char*)buffer1, &Names->boxname[i][0],32);
	  				pos = strcspn( buffer1, " " );
	  				strncpy( buffer2, buffer1, pos );
	
	  				ch[0] = buffer1[16];
	  				if ( ch[0] == 48) // if this is a ZERO ("0")
	  				{
	  					strncpy(buffer2 + pos, ".", 1);
	  					pos++;
	  					strncpy( buffer2 + pos, ch, 1);
	  					pos++;
	  					ch[0] = buffer1[17];
	  					strncpy( buffer2 + pos, ch, 1);
	  				}
	  				SetupString( (char*)buffer1, buffer2,18);
	  				memcpy(&Names->shortname[i][0], buffer1, 18);
	  			}
	  		}
	  		else
	  		{
	  			if (*pw < 1)
	  			{
	  				printf("\nUnable to locate any Active Servers!\n");
	  				return false;
	  			}
	  			else
	  			{
	  				// SNA only support 64 nodes
	  				printf("\nMore than 64 nodes found\n");
	  				return false;
	  			}
	  		}
	  		Names->nodenumber = *pw;
	  	}
	  	return true;
	  }
	
	  /*****************************************************************************/ 
	  /* GetDefInfo - calls the Display Management verb to get the link_info for a */ 
	  /* particular server/node in the SNA Domain.                                 */ 
	  /*****************************************************************************/ 
	  void GetDefInfo(dispvcb_t *dispvcb, dbufstruct *DataBuffer, char boxname[])
	  {
	  	dispvcb->display.opcode = AP_DISPLAY;
	  	dispvcb->display.init_sect_len = (unsigned long)&(((DISPLAY *)0)->sna_global_info_ptr);
	  	dispvcb->display.num_sections = 0x10;
	  	dispvcb->display.buffer_len = sizeof(DataBuffer->dbuf);
	  	dispvcb->display.buffer_ptr = DataBuffer->dbuf;
	  	strcpy( (char*)DataBuffer->dbuf, "CSEXTNID" );
	  	memcpy( DataBuffer->dbuf + 8, boxname,32 );
	  	dispvcb->display.link_info = AP_YES;
	  	APPC( (long)dispvcb );
	  }
	
	  /*****************************************************************************/ 
	  /* EnumerateLinkInfo - This function goes through the link_info_section and  */ 
	  /* prints out the information returned for each link service (connection)    */ 
	  /* found.                                                                    */ 
	  /*****************************************************************************/ 
	  void EnumerateLinkInfo(dispvcb_t *dispvcb)
	  {
	  	LINK_INFO_SECT *link_info;
	  	LINK_OVERLAY *link_overlay;
	  	unsigned short i;
	  	char buffer1[20];
	
	  	link_info = dispvcb->display.link_info_ptr;
	  	link_overlay = (LINK_OVERLAY *)((char *)link_info + link_info->link_init_sect_len);
	  	if (link_info->num_links == 0)
	  	{
	  		printf("No Active Links found.\n");
	  	}
	  	else
	  	{
	  		for (i = 0; i < link_info->num_links; i++)
	  		{
	  			EBC_to_ASCII( (char*)buffer1, link_overlay->link_id);
	  			printf("\tConnection Name: %s\n",buffer1);
	  			SetupString( (char*)buffer1, (char*)link_overlay->dlc_name,8);
	  			printf("\t\tDLC Name: %s",buffer1);
	  			if (link_overlay->inbound_outbound == AP_OUTBOUND)
	  			{
	  				printf(" ,Outbound\n");
	  			}
	  			else
	  			{
	  				printf(" ,Inbound\n");
	  			}
	  			switch (link_overlay->state)
	  			{
	  			case AP_CONALS_PND:
	  				printf("\t\tLink state: AP_CONALS_PND\n");
	  				break;
	  			case AP_XID_PND:
	  				printf("\t\tLink state: AP_XID_PND\n");
	  				break;
	  			case AP_CONTACT_PND:
	  				printf("\t\tLink state: AP_CONTACT_PND\n");
	  				break;
	  			case AP_CONTACTED:
	  				printf("\t\tLink state: AP_CONTACTED\n");
	  				break;
	  			case AP_DISC_PND:
	  				printf("\t\tLink state: AP_DISC_PND\n");
	  				break;
	  			case AP_DISC_RQ:
	  				printf("\t\tLink state: AP_DISC_RQ\n");
	  				break;
	  			}
	  			printf("\t\tActive Sessions: %i\n",link_overlay->num_sessions);
	  			link_overlay=(LINK_OVERLAY *)((char *)link_overlay + link_overlay->link_entry_len);
	  		} // for
	  	} //end else
	  	printf("\n");;
	  }
	
	  /*****************************************************************************/ 
	  /* DoLinkInfo - This function does most of the work. It loops through each   */ 
	  /* node, calling GetDefInfo and EnumerateLinkInfo to display the status of   */ 
	  /* all available links in the domain.                                        */ 
	  /*****************************************************************************/ 
	  bool DoLinkInfo(namestruct *Names)
	  {
	  	int loop;
	  	dbufstruct DataBuffer;
	  	dispvcb_t dispvcb;
	  	char *dispvcbptr;
	
	  	dispvcbptr=(char *)&dispvcb;
	  	// clear buffer and call display verb for link_info
	  	// for each boxname found in Names
	  	for (loop = 0; loop < Names->nodenumber; loop++)
	  	{
	  		CLEARDISPVCB;
	  		ZERODATABUFFER;
	  		GetDefInfo(&dispvcb, &DataBuffer, Names->boxname[loop]); //link_info
	  		if( dispvcb.display.primary_rc != AP_OK )
	  		{
	  			DisplayVerbFailed(dispvcb.display.primary_rc, dispvcb.display.secondary_rc);
	  			DSPAppcError(&dispvcb);
	  			return false;
	  		}
	  		else
	  		{
	  			printf("\nBoxName:Server: %.8s:%s\n",Names->nodename[loop],Names->shortname[loop]);
	  			EnumerateLinkInfo(&dispvcb);
	  		} //end else
	  	} //end for loop
	  	return true;
	  }
	
	  /*****************************************************************************/ 
	  /* main - main procedure for program									     */ 
	  /*****************************************************************************/ 
	  void main( int argc, char *argv[])
	  {
	  	namestruct gNames;
	  	int iRet;
	  	WAPPCDATA AppcInfo;
	
	  	if (argc == 2 && ( stricmp(_strupr(argv[1]),"/H") || stricmp(_strupr(argv[1]),"-H")) )
	  	{
	  		show_usage();
	  		return;
	  	}
	
	  	if( (iRet = WinAPPCStartup(WinAPPCVERSION, &AppcInfo)) != 0 )
	  	{
	  		printf( "\nWinAPPCStartup Failed, error %d\n", iRet );
	  		return;
	  	}
	  	else
	  	if ( GetNodes(&gNames) ) // did it return true?
	  	{
	  		// we have now populated the gNames structure
	  		// so we can now get the rest of what we need
	  		if (DoLinkInfo(&gNames))
	  		{
	  			printf("Completed\n");
	  		}
	  		else
	  		{
	  			printf("DoLinkInfo failed\n");
	  		}
	  	} 
	  	WinAPPCCleanup();
	  }
	
	Example output is shown below for a single server that has three nodes
	configured. The first node has three connections, the second and third nodes
	have one connection each. Notice that only two connections are shown for the
	first node here. This is because one of the connections was set up for "On
	Demand", and was not in an active state.
	
	BoxName:Server: SNASERVR:CHARLIEE
	       Connection Name: PRT
	               DLC Name: SDLC ,Outbound
	               Link state: AP_CONTACTED
	               Active Sessions: 2
	       Connection Name: CONNECT1
	               DLC Name: IBMTRNET ,Outbound
	               Link state: AP_CONTACT_PND
	               Active Sessions: 0
	
	BoxName:Server: SNASRV02:CHARLIEE.02
	       Connection Name: CONNECT2
	               DLC Name: IBMTRNET ,Outbound
	               Link state: AP_CONTACTED
	               Active Sessions: 0
	
	BoxName:Server: SNASRV03:CHARLIEE.03
	       Connection Name: CONNECT3
	               DLC Name: IBMTRNET ,Outbound
	               Link state: AP_CONTACT_PND
	               Active Sessions: 0
	
	Completed
	
	For additional information about how to retrieve 3270 LU information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q214629 How To Retrieve 3270 LU Information For SNA Server Programmatically
	
	For information on how to use the NLS API to do EBCDIC - ASCII conversion, please
	see the following article in the Microsoft Knowledge Base:
	
	  
	  Q214649 How To Program EBCDIC - ASCII Conversion Using The NLS API
	
	For additional programming information, please see the SNA SDK documentation that
	is included with SNA Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
