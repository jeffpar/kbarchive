---
layout: page
title: "Q62562: DOS LAN Manager NetBIOS Sample Program"
permalink: kb/062/Q62562/
---

## Q62562: DOS LAN Manager NetBIOS Sample Program

	Article: Q62562
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following program demonstrates the usage of the NetBIOS post processing
	routine for asynchronous network control block (NCB). submission and processing
	in the MS-DOS LAN Manager environment.
	
	  /*
	      Compile option: CL -C -W3 -Zi ncbpost.c
	      Link    option: Link /CO ncbpost,,,slibcer;
	      Usage         :
	                      ncbpost
	
	     This software is provided for demonstration purposes only.
	     Microsoft makes no warranty, implied or otherwise, regarding
	     its usability in any given situation.
	
	   */ 
	
	  #define FALSE 0
	  #define TRUE  1
	
	  #include <stdio.h>
	  #include <dos.h>
	  #include <string.h>
	
	  #include <netcons.h>
	  #include <ncb.h>
	  #include <netbios.h>
	
	  void NetBiosRequest(NCB far *);
	
	  //PostRoutine() declaration.
	
	  extern void  cdecl interrupt far  PostRoutine(
	                              unsigned int es, unsigned int ds,
	                              unsigned int di, unsigned int si,
	                              unsigned int bp, unsigned int sp,
	                              unsigned int bx, unsigned int dx,
	                              unsigned int cx, unsigned int ax,
	                              unsigned int ip, unsigned int cs,
	                              unsigned int flags);
	
	  // Boolean signal between main() and PostRoutine(). Main() sets this
	  // signal to FALSE before submitting an asynchronous NCB.
	  // Subsequently, PostRoutine() sets this flag to TRUE upon
	  // completion of the NCB.
	
	  int  PostRoutineDriven;
	
	  void main()
	  {
	      NCB tstNCB;
	      ASTAT AStatBuf;
	      register int i,j;
	      unsigned short *usPtr;
	
	      // Assign a pointer to PostRoutine().
	      void  (far *PostRoutinePtr)() = (void (far *)()) PostRoutine;
	
	                      // ADD A NAME.
	
	      tstNCB.ncb_command = NCBADDNAME | ASYNCH;
	      strcpy(tstNCB.ncb_name,"aa");
	      tstNCB.ncb_lana_num = 0;
	
	      usPtr = (unsigned short *) &tstNCB.ncb_post;
	      *usPtr  = FP_OFF( PostRoutinePtr);
	      usPtr++;
	      *usPtr  = FP_SEG( PostRoutinePtr);
	
	      printf("\nsubmitting NCBADDNAME   \n");
	      NetBiosRequest((NCB far *)&tstNCB);
	      do {
	
	              // We will come out once PostRoutine() is done.
	
	      } while (PostRoutineDriven == FALSE );
	      PostRoutineDriven = FALSE;
	
	      printf("cmd cplt code: %d\n",tstNCB.ncb_cmd_cplt);
	      printf("ret code: %d\n",tstNCB.ncb_retcode);
	
	                  // NOW DELETE THE NAME.
	
	      tstNCB.ncb_command = NCBDELNAME | ASYNCH;
	      strcpy(tstNCB.ncb_name,"aa");
	      tstNCB.ncb_lana_num = 0;
	
	      usPtr = (unsigned short *) &tstNCB.ncb_post;
	      *usPtr  = FP_OFF( PostRoutinePtr);
	      usPtr++;
	      *usPtr  = FP_SEG( PostRoutinePtr);
	
	      printf("\nsubmitting NCBDELNAME   \n");
	      NetBiosRequest((NCB far *)&tstNCB);
	      do {
	
	              // We will come out once PostRoutine() is done.
	
	      } while (PostRoutineDriven == FALSE );
	      PostRoutineDriven = FALSE;
	
	      printf("cmd cplt code: %d\n",tstNCB.ncb_cmd_cplt);
	      printf("ret code: %d\n",tstNCB.ncb_retcode);
	
	                  // ADD A GROUP NAME.
	
	      tstNCB.ncb_command = NCBADDGRNAME | ASYNCH;
	      strcpy(tstNCB.ncb_name,"aa");
	      tstNCB.ncb_lana_num = 0;
	
	      usPtr = (unsigned short *) &tstNCB.ncb_post;
	      *usPtr  = FP_OFF( PostRoutinePtr);
	      usPtr++;
	      *usPtr  = FP_SEG( PostRoutinePtr);
	
	      printf("\nsubmitting NCBADDGRNAME  \n");
	      NetBiosRequest((NCB far *)&tstNCB);
	      do {
	
	              // We will come out once PostRoutine() is done.
	
	      } while (PostRoutineDriven == FALSE );
	      PostRoutineDriven = FALSE;
	
	      printf("cmd cplt code: %d\n",tstNCB.ncb_cmd_cplt);
	      printf("ret code: %d\n",tstNCB.ncb_retcode);
	
	                  // NOW DELETE THE GROUP NAME.
	
	      tstNCB.ncb_command = NCBDELNAME | ASYNCH;
	      strcpy(tstNCB.ncb_name,"aa");
	      tstNCB.ncb_lana_num = 0;
	
	      usPtr = (unsigned short *) &tstNCB.ncb_post;
	      *usPtr  = FP_OFF( PostRoutinePtr);
	      usPtr++;
	      *usPtr  = FP_SEG( PostRoutinePtr);
	
	      printf("\nsubmitting NCBDELNAME   \n");
	      NetBiosRequest((NCB far *)&tstNCB);
	      do {
	
	              // We will come out once PostRoutine() is done.
	
	      } while (PostRoutineDriven == FALSE );
	      PostRoutineDriven = FALSE;
	
	      printf("cmd cplt code: %d\n",tstNCB.ncb_cmd_cplt);
	      printf("ret code: %d\n",tstNCB.ncb_retcode);
	
	      printf("\n All is well!!!\n");
	
	  }
	
	  void NetBiosRequest(NcbPtr)
	  NCB *NcbPtr;
	  {
	      union REGS InRegs,OutRegs;
	      struct SREGS SegRegs;
	
	      InRegs.x.bx = FP_OFF(NcbPtr);
	      SegRegs.es  = FP_SEG(NcbPtr);
	
	      int86x(0x5C,&InRegs,&OutRegs,&SegRegs);
	  }
	
	  void  cdecl interrupt far  PostRoutine(
	                                   es,      ds,
	                                   di,      si,
	                                   bp,      sp,
	                                   bx,      dx,
	                                   cx,      ax,
	                                   ip,      cs,
	                                   flags)
	  unsigned es, ds, di, si, bp, sp, bx, dx, cx, ax, ip, cs, flags;
	
	    {
	
	      PostRoutineDriven = TRUE;
	
	      /* MS-DOS CALLS AREN'T ALLOWED HERE SINCE MS-DOS IS
	         NON-REENTRANT. */ 
	
	      /*  ES:BX point to completed ncb */ 
	
	     }
	
	Additional query words: 2.00 2.0 2.10 2.1 2.1A 2.20 netbios
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
