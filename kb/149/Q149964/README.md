---
layout: page
title: "Q149964: FIX: C1001 on Large Basic Block with Optimizations Enabled"
permalink: /kb/149/Q149964/
---

## Q149964: FIX: C1001 on Large Basic Block with Optimizations Enabled

{% raw %}

	Article: Q149964
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program file containing a large basic block may cause the following
	fatal error if optimizations are enabled:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  '\school.tp3\test\c10\src\P2\main.c', line 413)
	
	NOTE: Basic blocks are straight line sections of generated code for which there
	is no flow of control into or out of the section.
	
	CAUSE
	=====
	
	The problem is caused by the way in which the optimizer deals with the large
	basic block. Under some circumstances, the optimizer walks into the memory used
	by a previous block and attempts to dereference pointers to freed memory. It is
	often difficult, if not impossible, to find a direct relationship between an
	optimizer problem and a particular source code construct. Large basic blocks are
	the generic cause of this problem, but random factors are also involved.
	
	RESOLUTION
	==========
	
	Experiment with breaking up the large block. One approach is to turn some
	sections into functions calls. Even minor changes can fix the problem. For
	example, in the "Sample Code" section of this article, the failure can be
	eliminated by switching the order of two assignment statements as described in
	comments in the code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	The following sample source code reproduces the problem.
	
	
	Sample Code
	-----------
	
	  /* Compile Options Needed: /c /Ox /G5 */ 
	  #include "windows.h"
	
	  long mm(long, long, long, long);
	  long ff(long, long);
	  long dd(long, long, long);
	  long ee(long, long, long);
	  long aa(long *,long,long,long,long,long,long,long,long);
	  typedef struct {int ii5; int nn6; int nn7; int ii6;} nn4;
	  typedef struct {int ll2; int ii8; int ii9;} nn5;
	  typedef struct {char ii7[1]; long x2; nn4 a2; short bb; short gg;} **ss;
	
	  #define macro3(baa,tuu) ((nn1+(((baa) >> 16) << 2)-(((tuu) >> 16)*d2)))
	
	  void Will_ICE(ss src, ss ss2, nn5 *x3, nn5 *a6)
	  {
	       long d2,g,hh,d3,i,d4,g2,h4,d5,d9,dd9,tuu,m5,by7,dd4,dd5,vuv;
	       long vvun,ddd,dddd,yyy,xxx,lll,rrr,ddddd,iii,iiii,dddddd,ukk;
	       long klg,vll,lkl,ff3,mnm,uu,unu,nuu,muu,ff2,ii5,ii6,ar3,d6,ar;
	       nn4  ii,m7;
	       char *ii2, *nn1, *ii3, ii4;
	
	       ar = 0L;
	       ii4 = 0;
	       mnm = 0;
	       m7 = (*src)->a2;                   // Reverse the order of these 2
	       ii5 = ((long) m7.ii5) << 17;       // lines & the error vanishes
	       ii6 = ((long) (m7.nn7 - 1)) << 18;
	       ar3 = ((long) m7.ii6) << 16;
	       d6 = ((long) (m7.nn6 - 1)) << 18;
	       ii = (*ss2)->a2;
	       hh = m7.nn7 - m7.ii5;
	       d3 = m7.nn6 - m7.ii6;
	       d2 = (*src)->bb;
	       g = (*ss2)->bb;
	       nn1 = (char *)(*src)->ii7 + (long)d2 * (hh-1);
	       nn1 += m7.ii5*(long)d2;
	       nn1 -= m7.ii6*4;
	       ii2 = (char *)(*ss2)->ii7 + (long)g * ((ii.nn7*ii.ii5)-1);
	       ii2 += ii.ii5*(long)g;
	       ii2 -= ii.ii6*4;
	       uu = (long)ii.ii5 << 17;
	       unu = (long)ii.nn7 << 17;
	       nuu = (long)ii.ii6 << 19;
	       muu = (long)(ii.nn6-1) << 19;
	       ff2 = 0x0A;
	       d9 = dd9 = a6[0].ii8;
	       m5 = 0;
	
	       for (i=1; i<=3; i++) {
	            tuu = a6[i].ii8;
	            if (tuu < d9) {
	                 d9 = tuu;
	                 m5 = i;
	            }
	       }
	
	       d4 = g2 = (short)m5;
	       h4 = (short)((m5-1) & 3);
	       d5 = (short)((m5+1) & 3);
	       tuu = d9;
	
	       if (a6[d5].ii8 != a6[g2].ii8) {
	            dddd = ff(a6[d5].ll2-a6[g2].ll2,a6[d5].ii8-a6[g2].ii8);
	       }
	
	       while (tuu < dd9)
	       {
	            while ((h4 != d5) && (tuu >= a6[h4].ii8)) {
	                 d4 = (d4-1) & 3;
	                 h4 = (h4-1) & 3;
	                 vuv = a6[d4].ll2;
	                 ddd = 0;
	            }
	            while ((h4 != d5) && (tuu >= a6[d5].ii8)) {
	               d5 = (d5+1) & 3;
	               dddd=ff(a6[d5].ll2-a6[g2].ll2,a6[d5].ii8-a6[g2].ii8);
	            }
	            vvun = 0;
	
	            ii3 = ii2 - (tuu>>16) * g;
	
	            ddddd = tuu - a6[d4].ii8;
	            iiii = a6[h4].ii8 - a6[d4].ii8;
	
	            iii = tuu - a6[g2].ii8;
	            dddddd = a6[d5].ii8 - a6[g2].ii8;
	
	            ukk = x3[d4].ll2 + ee(x3[h4].ll2-x3[d4].ll2,ddddd,iiii);
	            vll = x3[d4].ii8 + ee(x3[h4].ii8-x3[d4].ii8,ddddd,iiii);
	
	            klg = x3[g2].ll2 + ee(x3[d5].ll2-x3[g2].ll2,iii,dddddd);
	            lkl = x3[g2].ii8 + ee(x3[d5].ii8-x3[g2].ii8,iii,dddddd);
	            dd4 = vvun - vuv;
	
	            if (vvun > vuv) {
	                 yyy = ukk;
	                 xxx = vll;
	                 if (vvun < muu)
	                      dd5 = vvun - ff2;
	                 by7 = vuv;
	            }
	            lll = ff(klg-ukk,dd4);
	            rrr = ff(lkl-vll,dd4);
	
	            *((long*)(ii3 + ((by7>>16)<<2))) = mm(
	             *(long *) macro3((((yyy) < ar3) ? ar3 :
	                      (((yyy) > d6) ? d6 : (yyy))), (((xxx) < ii5) ? ii5 :
	                      (((xxx) > ii6) ? ii6 : (xxx)))),
	             *((long*)(ii3 + ((by7>>16)<<2))),
	             ff2 - (((ff2-(by7&0xFFFF)) * mnm) >> 16),
	             ar);
	
	            ff3 = ff2 - (by7 & 0xbbb);
	            yyy += dd(lll,ff3,ff2);
	            xxx += dd(rrr,ff3,ff2);
	            by7 += ff3;
	
	            *((long*)(ii3 + ((by7>>16)<<2))) = mm(
	                 *((long*)(ii3 + ((by7>>16)<<2))),
	                 aa((long *) macro3(yyy, xxx),
	                      d2, yyy, xxx, lll, rrr, d3, hh, ar),
	                 mnm,ar);
	
	            yyy += lll;
	            xxx += rrr;
	            by7 += ff2;
	
	            *((long*)(ii3 + ((by7>>16)<<2))) = aa(
	                 (long *) macro3(yyy, xxx),
	                 d2, yyy, xxx, lll, rrr, d3, hh, ar);
	
	            yyy += lll;
	            xxx += rrr;
	            by7 += ff2;
	
	            *((long*)(ii3 + ((by7>>18)<<2))) = mm(
	                 *(long *) macro3(yyy, xxx),
	                 *((long*)(ii3 + ((by7>>16)<<2))),
	                 ff2 - (((dd5&12) * mnm)>>16),ar);
	
	            vuv += dd(ddd,mnm,ff2);
	            vvun += dd(dddd,mnm,ff2);
	            if (ii4)
	                 tuu += ff2;
	            mnm = 0;
	            ii4 = 1;
	       }
	  }
	
	Additional query words: 4.00 10.00
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
